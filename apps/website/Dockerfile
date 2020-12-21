FROM node:15 as builder

WORKDIR /workspace

COPY package.json .
COPY yarn.lock .

RUN yarn install


COPY . .
ENV NODE_ENV=production

RUN yarn nx build website


FROM node:15-alpine

WORKDIR /workspace



COPY --from=builder /workspace/dist/apps/website ./
RUN ls -al

RUN yarn install 
RUN yarn add @nrwl/workspace


EXPOSE 3000
CMD ["yarn", "start"]
