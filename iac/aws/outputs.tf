# DYNAMODB TABLE OUTPUTS
output "dynamodb_table_name" {
  value = aws_dynamodb_table.products.name
}

output "dynamodb_table_arn" {
  value = aws_dynamodb_table.products.arn
}

# API GATEWAY OUTPUTS
output "api_url" {
  value = aws_apigatewayv2_api.api.api_endpoint
}