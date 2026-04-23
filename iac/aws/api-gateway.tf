resource "aws_apigatewayv2_api" "api" {
  name          = "bakehouse78-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]  # or your domain later
    allow_methods = ["GET"]
    allow_headers = ["*"]
  }
}

resource "aws_apigatewayv2_integration" "get_products" {
  api_id             = aws_apigatewayv2_api.api.id
  integration_type   = "AWS_PROXY"

  description     = "Integration for GET /products"
  integration_uri    = aws_lambda_function.get_products.invoke_arn
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "get_products" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /products"
  
  target = "integrations/${aws_apigatewayv2_integration.get_products.id}"
}

resource "aws_apigatewayv2_stage" "dev" {
  api_id      = aws_apigatewayv2_api.api.id
  name        = "dev"
  auto_deploy = true
  default_route_settings {
    throttling_burst_limit = 50
    throttling_rate_limit  = 20
  }
#   access_log_settings {
#   destination_arn = aws_cloudwatch_log_group.api_logs.arn
#   format = jsonencode({
#     requestId = "$context.requestId"
#     ip        = "$context.identity.sourceIp"
#     routeKey  = "$context.routeKey"
#     status    = "$context.status"
#   })
# }
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_products.function_name
  principal     = "apigateway.amazonaws.com"
  
  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}