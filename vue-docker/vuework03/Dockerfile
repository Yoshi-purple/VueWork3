FROM node:lts-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . /app

EXPOSE 4000

CMD ["yarn", "serve"]