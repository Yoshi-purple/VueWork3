FROM node:lts-alpine3.12

WORKDIR /app

# COPY ./package.json ./yarn.lock /

# COPY . .

COPY . /app

RUN yarn install

EXPOSE 4000

CMD ["yarn", "serve"]