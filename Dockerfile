FROM maven:3.9.9-eclipse-temurin-17 AS build

WORKDIR /workspace

COPY SpeedDatingApplication/pom.xml ./pom.xml
RUN mvn -B dependency:go-offline

COPY SpeedDatingApplication/src ./src
RUN mvn -B package

FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /workspace/target/SpeedDating-0.0.1-SNAPSHOT.jar ./app.jar

ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
