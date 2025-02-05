FROM node:18

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5173

# was failing because of the --host flag
CMD ["npm", "run", "dev", "--", "--host"]
