FROM node:10

EXPOSE 80

STOPSIGNAL SIGTERM

ENV NICK "*seeder"

COPY ./docker-entrypoint.js /

RUN npm i cabal -g

CMD ["node", "./docker-entrypoint.js"]
