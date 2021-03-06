#FROM node:lts-alpine as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN npm config set registry https://registry.npm.taobao.org
#RUN npm install
#COPY . .
#RUN npm run build

FROM nginx:stable-alpine 
#COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html
COPY ./config/nginx /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

