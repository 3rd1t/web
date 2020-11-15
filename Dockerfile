FROM node:15 AS builder

ARG SERVICE

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
ENV NODE_ENV=production
RUN yarn nx build css
RUN yarn nx build ${SERVICE} --with-deps  --skip-nx-cache

FROM node:15-alpine3.10

ARG SERVICE

WORKDIR /app
COPY --from=builder /app/dist/packages/${SERVICE} .
COPY .env .
RUN yarn install

ENV PORT 3000
CMD ["yarn", "start", "-p", ${PORT}]
