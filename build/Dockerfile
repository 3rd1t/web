FROM node:15 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install


COPY . .
ENV NODE_ENV=production
ARG SERVICE 


RUN yarn nx build ${SERVICE}


FROM node:15-alpine
ARG SERVICE 

WORKDIR /app



COPY --from=builder /app/dist/apps/${SERVICE} ./
# COPY --from=builder /app/dist/apps/${SERVICE}/.next ./.next/
RUN ls -al

RUN yarn install 
RUN yarn add @nrwl/workspace


# Runtime variables
ENV AUTH0_DOMAIN XXX
ENV AUTH0_CLIENT_ID XXX
ENV AUTH0_CLIENT_SECRET XXX
ENV AUTH0_REDIRECT_URI XXX
ENV AUTH0_POST_LOGOUT_REDIRECT_URI XXX
ENV COOKIE_SECRET XXX



EXPOSE 3000
CMD ["yarn", "start"]
