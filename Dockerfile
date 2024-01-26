FROM node:18-bullseye-slim AS base

WORKDIR /app

# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 8080
EXPOSE 8080

# Start the server 
CMD ["node", "server.js"]