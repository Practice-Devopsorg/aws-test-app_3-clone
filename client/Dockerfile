FROM node:14
WORKDIR /app
COPY . .
ENV REACT_APP_API_URL=http://13.51.76.222:6000/api
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
