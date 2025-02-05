
FROM node:18


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


RUN chmod +x /app/node_modules/.bin/nodemon


EXPOSE 5001


CMD ["index.js"]
