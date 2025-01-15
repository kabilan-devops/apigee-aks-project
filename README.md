# Apigee AKS Project
A project demonstrating an Apigee API Proxy with OAuth authentication, a backend deployed in AKS, integration with Loggly for logging, and performance testing.

## Prerequisites
- Apigee account
- Postman
- Azure Kubernetes Service (AKS) cluster
- Loggly account
- Load testing tools (e.g., Apache JMeter or k6)
  

## Steps to Create and Deploy the API Proxy 
1. Create an API Proxy to Generate Access Tokens
2. Create an API proxy that accepts user credentials to generate an access token using the OAuthV2 policy.
3. Add a request validation policy to ensure the client sends valid credentials.
4. Test the proxy by posting user credentials to generate a token.

## Secure the API Proxy with OAuth and Add Logging
1. Create a second API proxy for your actual API, secured with the OAuthV2 policy to validate tokens.
2. Add a Message Logging policy to log request and response details to Loggly.
3. Test the API proxy by sending requests with a valid access token.

## Deploy Backend Microservices in Azure Kubernetes Service (AKS)
1. Prepare your backend microservices for deployment.
2. Use the Kubernetes manifests in the kubernetes_files folder to deploy the backend to an AKS cluster.
3. Verify that the services are running and accessible.

## Configure Loggly for API Logging
1. Create a Loggly account and set up a new logging endpoint.
2. Configure the Message Logging policy in your API proxy to send logs to Loggly.
3. Test the logging setup by verifying that API transaction logs appear in Loggly.

## Conduct Load Testing on the API
1. Use load testing tools (e.g., Apache JMeter or k6) to simulate traffic to your API.
2. Run performance tests with different loads and analyze the behavior of the API proxy and backend

## Monitor Logs and Optimize Performance
1. Analyze the logs in Loggly for any errors, performance of proxy, or status code.
