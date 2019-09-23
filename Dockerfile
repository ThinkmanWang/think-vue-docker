FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls

FROM nginx:stable-alpine 
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN ls /usr/share/nginx/html

COPY ./config/nginx /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
