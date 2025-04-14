FROM node:18 AS build

WORKDIR /app

#RUN cd /root/Devops/Tushar_React/Tushar_React/Project1/Docker/Project1/  

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#Multistage docker file 

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


