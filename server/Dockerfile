# Use Node.js 20
FROM node:20.10.0

# Install pm2 globally
RUN npm install -g pm2

# Set working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Expose port 5000
EXPOSE 5000

# Start the backend server using pm2
CMD ["pm2-runtime", "index.js"]
