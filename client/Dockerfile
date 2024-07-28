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
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

# Stage 2: Serve the React app with Nginx
FROM nginx:latest

# Copy built files from build stage to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
