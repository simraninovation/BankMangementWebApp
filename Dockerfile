FROM nginx:alpine
COPY dist/c360-web/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf