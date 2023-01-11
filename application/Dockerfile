FROM node:19.4.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
ARG APP_PORT=9100
RUN sed -i -e "s/port_number/$APP_PORT/" index.html
ENV REDIS_PORT=6379
ENV REDIS_HOST=localhost
ENV APP_PORT=$APP_PORT
EXPOSE 3000

CMD [ "npm", "run", "start" ]