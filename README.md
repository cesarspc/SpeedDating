# SpeedDating
The SpeedDating app allows you to manage a dating event. The application displays a CRUD of participants and dates. The date only can be scheduled if the applicant have at least 3 characteristics of the searcher's liking and both have also paid the registration fee. You can then enter the participant's notes of the dating for finally, with the finish button send the results email for each participant if there was a match.
## Install
### Steps to use the SpeedDating manager
1. Deploy the Web Application on a Tomcat web server.
2. Open the Spring Maven SpeedDating project in NetBeans with Java JDK 17+ or the equivalent process in other IDEs.  
2. Create the **email.properties** file of the email from which the participants will receive the dating results.
3. Set the server.port and allowed.origin (the URL of the web deployment) properties in the application.properties file.
4. Now you can deploy the API on a Tomcat web server!
### email.properties file
This file must be in src/main/resources/ directory with this information: 
``email.username=example@email.com  
email.password=12345678``  
