# SpeedDating
The SpeedDating app allows you to manage a dating event. The application displays a CRUD of participants and dates. The date only can be scheduled if the applicant have at least 3 characteristics of the searcher's liking and both have also paid the registration fee. You can then enter the participant's notes of the dating for finally, with the send emails button, send the results email for each participant if there was a match. In this project we used:
- Spring Boot
- Lombok
- H2 Database
- Bootstrap in Web Page styles
## Install
### Steps to use the SpeedDating manager
1. Deploy the Web Application on a Tomcat web server.
2. If you need to, you can change the API endpoint in the "common.js" file.
3. Open the Spring Maven SpeedDating project in NetBeans with Java JDK 17+ or the equivalent process in other IDEs.  
4. Create the **email.properties** file of the email from which the participants will receive the dating results.
5. Set the server.port and allowed.origin (the URL of the web deployment) properties in the application.properties file.
6. Deploy the API on the web server.
### email.properties file
This file must be in src/main/resources/ directory with this information:
    
    # EXAMPLE DATA
    email.username=example@email.com
    email.password=12345678  
