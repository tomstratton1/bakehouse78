output "dynamodb_table_name" {
  value = aws_dynamodb_table.products.name
}

output "dynamodb_table_arn" {
  value = aws_dynamodb_table.products.arn
}