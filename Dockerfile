FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY contents/ /usr/share/nginx/html

EXPOSE 4001
