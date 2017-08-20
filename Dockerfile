FROM node:8.3-alpine
MAINTAINER Carlos Castillo

RUN apk update && apk add ffmpeg && rm -rf /var/cache/apk/*

RUN ["mkdir", "/opt/app"]
COPY config /opt/app/config
COPY src /opt/app/src
COPY *.json /opt/app/

WORKDIR "/opt/app"

RUN npm install && \
    npm run build && \
    rm -rf node_modules && \
    npm install --only=production && \
    npm cache clean --force

ENV PORT 3000

CMD npm start
