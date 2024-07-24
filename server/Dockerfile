FROM node:14
RUN npm install -g pm2
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 6000
CMD ["pm2-runtime", "index.js"]
