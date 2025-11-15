# ---------------------------------------------------
# ETAPA 1 — Build con Maven + Java 21
# ---------------------------------------------------
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline -B

COPY . .
RUN mvn clean package -DskipTests && cp target/*.jar app.jar

# ---------------------------------------------------
# ETAPA 2 — Imagen final con JRE
# ---------------------------------------------------
FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/app.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
