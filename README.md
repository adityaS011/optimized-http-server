# Node.js HTTP Server

This project implements a simple HTTP server in Node.js using Express. The server responds to incoming GET requests on the endpoint `/data` and accepts query parameters `n` (file name) and `m` (line number).

## Project Structure

- `index.js`: Main server file.
- `package.json`: Project configuration file.
- `Dockerfile`: Docker configuration file.
- `tmt/data/`: Directory containing sample text files.

## Setup

1. **Install Dependencies:**
   ```bash
   npm install
2. **Run Server Locally:**
   ```bash
   node index.js
3. **Build and Run Docker Container with specifications:**
   ```bash
   docker build -t http-server-app .
   docker run -p 8080:8080 --memory 1500m --cpus 2 http-server-app

## Endpoints
### GET /data

### Parameters:
n: File name (required).
m: Line number (optional).
Examples:

Retrieve entire content of a file: http://localhost:8080/data?n=1
Retrieve specific line from a file: http://localhost:8080/data?n=1&m=3
Docker Compatibility
The Dockerfile is designed to work on both ARM and x86 architectures. Ensure Docker is installed on your system.

## Dependencies
Express: Web framework for Node.js.
Helmet: Security middleware for Express.
