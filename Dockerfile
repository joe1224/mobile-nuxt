FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf

ADD nginx/default.conf /etc/nginx/conf.d/default.conf
ADD nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /.nuxt/dist .
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
