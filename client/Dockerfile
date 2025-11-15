# ---------------------------------------------------
# ETAPA 1 — Build de React
# ---------------------------------------------------
FROM node:20 AS build

WORKDIR /app

# Copiar package.json y lock
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código
COPY . .

# ARG del compose
ARG API_HOST
ARG API_PORT
ARG API_BASE

# Variables de entorno que Vite lee
ENV VITE_API_HOST=http://${API_HOST}
ENV VITE_API_PORT=${API_PORT}
ENV VITE_API_BASE=${API_BASE}

# Construir el proyecto
RUN npm run build

# ---------------------------------------------------
# ETAPA 2 — Servir con Nginx
# ---------------------------------------------------
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
