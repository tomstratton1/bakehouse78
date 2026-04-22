resource "aws_iam_role" "lambda_role" {
  name = "bakehouse78-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic_logs" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_policy" "dynamodb_read" {
  name = "bakehouse78-dynamodb-read"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "dynamodb:Scan",
        "dynamodb:Query",
        "dynamodb:GetItem"
      ]
      Resource = aws_dynamodb_table.products.arn
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_dynamo" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.dynamodb_read.arn
}

resource "aws_lambda_function" "get_products" {
  function_name = "bakehouse78-get-products"

  filename         = "lambda/get_products.zip"
  source_code_hash = filebase64sha256("lambda/get_products.zip")

  handler = "get_products.lambda_handler"
  runtime = "python3.10"

  role = aws_iam_role.lambda_role.arn

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.products.name
    }
  }
}