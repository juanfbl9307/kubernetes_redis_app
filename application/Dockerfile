FROM node:19.4.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
ARG APP_PORT=9100
RUN sed -i -e "s/port_number/$APP_PORT/" index.html
ENV APP_PORT=$APP_PORT

CMD [ "npm", "run", "start" ]