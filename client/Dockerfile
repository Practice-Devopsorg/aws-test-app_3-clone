# Stage 1: Build the React app
FROM node:20.10.0 

# Set working directory
WORKDIR /app

# Copy all source files
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3006

# Start the app
CMD ["npm", "start"]
