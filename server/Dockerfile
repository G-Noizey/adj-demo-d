# Servir la imgen del backend con mvn
FROM maven:3.9.9-eclipse-temurin-21

#Establecer un directorio de trabajo
WORKDIR /app

#Copia todos los files del proyecto en el dir de trabajo
COPY . .

#Ejecutar 2 comandos:
# 1- Limpiar y compilar el jar del back

# 2.- Copiar el jar resultante al dir de trabajo
RUN mvn clean package -DskipTests && cp /target/*.jar app.jar

#EXPONER LA IMAGEN
EXPOSE 8081

#Ejecutar el comando para servir el jar
ENTRYPOINT ["java", "-jar", "app.jar"]