FROM node:16 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./public ./public
COPY ./src ./src
RUN npm run build


FROM nginx:latest AS deploy
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/build/. .