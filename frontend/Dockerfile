# get node
FROM node:18

# set working directory
WORKDIR /app

# copy built files into working directory
COPY package*.json ./

# install dependencies
RUN npm install

# copy front end code into working directory
COPY . .

# build application
RUN npm run build

# run http server to host static page
RUN npm install -g serve

# expose a port to the outside world
EXPOSE 3000

# start it up
CMD ["serve", "-s", "build", "-l", "3000"]
