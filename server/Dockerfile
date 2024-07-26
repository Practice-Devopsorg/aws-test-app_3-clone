# Use Node.js 20
FROM node:20.10.0

# Install pm2 globally
RUN npm install -g pm2

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 6000
EXPOSE 6000

# Start the backend server using pm2
CMD ["pm2-runtime", "index.js"]
