FROM node:20.10.0 

# Set working directory
WORKDIR /app

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
