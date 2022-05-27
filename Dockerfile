FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 4000

CMD ["npm","start"]