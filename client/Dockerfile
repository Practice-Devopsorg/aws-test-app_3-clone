FROM node:20.10.0 

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) from the client directory
COPY client/package.json client/package-lock.json ./

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Set environment variables
ENV REACT_APP_API_URL=http://13.51.76.222:6000

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:latest

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
