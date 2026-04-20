resource "aws_dynamodb_table" "products" {
    name = "bakehouse78-products"
    billing_mode = "PAY_PER_REQUEST"
    hash_key = "id"

    attribute {
        name = "id"
        type = "S"
    }

    tags = {
    Project = "bakehouse78"
    Env     = "dev"
  }
}