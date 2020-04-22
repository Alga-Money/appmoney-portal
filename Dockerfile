FROM node:10.15.3-alpine as build

WORKDIR /usr/app

COPY package.json package.json
RUN apk --no-cache add --virtual .deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  yarn install && \
  apk del .deps

COPY src/ src/
COPY angular.json package.json tsconfig.json ngsw-config.json tsconfig.app.json ./
RUN npm run build

FROM nginx
COPY --from=build /usr/app/public /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
