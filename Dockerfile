FROM node:latest AS builder

ARG SERVICE
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn nx export ${SERVICE} --with-deps

FROM node:latest

ARG SERVICE

WORKDIR /static
COPY --from=builder /app/dist/packages/${SERVICE}/exported .

RUN npm install -g serve

EXPOSE 5000
CMD ["serve", "."]

