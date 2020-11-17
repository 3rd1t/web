FROM node:15 AS builder

ARG SERVICE

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
ENV NODE_ENV=production
RUN yarn nx build ${SERVICE} --with-deps

FROM node:15-alpine3.10

ARG SERVICE
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/dist/packages/${SERVICE} .
# Copying next.config.js to use the serverRuntimeConfig object.
COPY --from=builder /app/packages/${SERVICE}/next.config.js .
RUN yarn install --production=true


# Runtime variables
ENV PORT 3000
ENV AUTH0_DOMAIN XXX
ENV AUTH0_CLIENT_ID XXX
ENV AUTH0_CLIENT_SECRET XXX
ENV AUTH0_REDIRECT_URI XXX
ENV AUTH0_POST_LOGOUT_REDIRECT_URI XXX
ENV COOKIE_SECRET XXX

CMD ["node", "node_modules/.bin/next", "start"]
