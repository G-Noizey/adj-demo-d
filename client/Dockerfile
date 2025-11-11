#Etapa 1 (build): compilación de recursos
FROM node:20 AS build

WORKDIR /app

#package-lock.json, package.json -> /app
COPY package*.json

#Funciona para generar node_modules
RUN npm install

# /client/* -> /app/*
COPY . .

#TRAER ESOS ARGS (LLEGAN DEL COMPOSE)
ARG API_HOST
ARG API_BASE
ARG API_PORT

#ESTABLECER LAS VARIABLES DE ENTORNO EN BASE A LOS ARGS (VAN AL .env)
ENV VITE_API_HOST=$API_HOST
ENV VITE_API_BASE=$API_BASE
ENV VITE_API_PORT=$API_PORT
# Funciona para generar el /dist
RUN npm run build

#Etapa 2: Construcción de imagen

FROM nginx:alpine

#Servir todos los recursos generados en la etapa anterior en la imagen.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CDM ["nginx", "-g", "daemon off;"]