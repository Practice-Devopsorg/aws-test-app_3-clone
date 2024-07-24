FROM node:14
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 6000
CMD ["npm", "start"]
