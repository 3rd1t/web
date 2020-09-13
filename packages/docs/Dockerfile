FROM nginx:1.19.2-alpine

COPY dist/packages/docs/exported /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

