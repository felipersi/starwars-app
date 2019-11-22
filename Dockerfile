FROM node:alpine

WORKDIR /starwars-app

COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]