# Stage 1: Build the React app
FROM node:20.10.0 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) from the client directory
COPY client/package.json client/package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files from the client directory
COPY . .

# Set environment variables
ENV REACT_APP_API_URL=http://13.51.76.222:6000

# Build the React app
RUN npm run build
