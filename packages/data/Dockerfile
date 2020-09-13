FROM nginx:1.19.2-alpine

COPY dist/packages/data/exported /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

