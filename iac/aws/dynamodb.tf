# PRODUCTS TABLE

resource "aws_dynamodb_table" "products" {
  name         = "bakehouse78-products"
  billing_mode = "PAY_PER_REQUEST"

  hash_key = "productId"

  attribute {
    name = "productId"
    type = "S"
  }

  attribute {
    name = "category"
    type = "S"
  }

  # Optional but useful for your UI (filter by category)
  global_secondary_index {
    name            = "category-index"
    hash_key        = "category"
    projection_type = "ALL"
  }

  tags = {
    Project = "bakehouse78"
    Type    = "catalog"
  }
}

# ORDER TABLE
resource "aws_dynamodb_table" "orders" {
  name         = "bakehouse78-orders"
  billing_mode = "PAY_PER_REQUEST"

  hash_key = "orderId"

  attribute {
    name = "orderId"
    type = "S"
  }

  # Optional future expansion (order history sorting)
  attribute {
    name = "createdAt"
    type = "S"
  }

  # Optional GSI for querying orders by time
  global_secondary_index {
    name            = "createdAt-index"
    hash_key        = "orderId"
    range_key       = "createdAt"
    projection_type = "ALL"
  }

  tags = {
    Project = "bakehouse78"
    Type    = "orders"
  }
}