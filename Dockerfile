FROM node:15 AS builder

ARG SERVICE
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn nx build ${SERVICE} --with-deps

FROM node:15-alpine3.10

ARG SERVICE

WORKDIR /app
COPY --from=builder /app/dist/packages/${SERVICE} .
COPY .env .
RUN yarn install
RUN ls -al .next
CMD ["yarn", "start"]
