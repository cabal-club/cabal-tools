FROM node:10

RUN npm i cabal -g

EXPOSE 80

STOPSIGNAL SIGTERM

ENV CHANNEL "default"

COPY ./docker-entrypoint.js /

CMD ["node", "./docker-entrypoint.js"]
