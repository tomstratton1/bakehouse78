import boto3
from botocore.exceptions import ClientError
import json
from decimal import Decimal

TABLE_NAME = "bakehouse78-products"
REGION = "eu-west-2"

dynamodb = boto3.resource("dynamodb", region_name=REGION)
table = dynamodb.Table(TABLE_NAME)

def convert_floats(obj):
    if isinstance(obj, list):
        return [convert_floats(i) for i in obj]
    elif isinstance(obj, dict):
        return {k: convert_floats(v) for k, v in obj.items()}
    elif isinstance(obj, float):
        return Decimal(str(obj))
    else:
        return obj

def load_products(file_path):
    with open(file_path) as f:
        data = json.load(f)
        return convert_floats(data)

#Load products
with open("products.json") as f:
    products = json.load(f)

def seed_products(products):
    for product in products:
        try:
            table.put_item(
                Item=product,
                ConditionExpression="attribute_not_exists(productId)"
            )
            print(f"Inserted: {product['productId']}")
        except ClientError as e:
            if e.response["Error"]["Code"] == "ConditionalCheckFailedException":
                print(f"Skipped (already exists): {product['productId']}")
            else:
                print(f"Error inserting {product['productId']}: {e.response['Error']['Message']}")


if __name__ == "__main__":
    files = ["products.json", "sweetProducts.json"]

    for file in files:
        print(f"\nSeeding {file}...")
        seed_products(load_products(file))