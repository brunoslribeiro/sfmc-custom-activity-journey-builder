# Salesforce - Example Custom Activity in Journey Builder

This is a simple code for the purpose of studying a customized activity in Marketing Cloud that works with a node.js application, which has the simple function of taking a sample of parameters related to the journey and sending them to an endpoint through configurations made in the config.json.



![Journey Activity Example](https://github.com/brunoslribeiro/sfmc-custom-activity-journey-builder/blob/main/assets/example2.png)

Requirements
- You need a Node.JS server.
- You need an SSL domain otherwise Marketing Cloud rejects calls. 
- You will need to create a customized package in your Marketing Cloud environment.

Settings
- Go to Setup > Installed Packages > Click on Button "New"
- After creating the package click on "Add Components"
- In Screen "Choose Your Component Type" -> Api Integration -> Server to Server
- Check all permissions below:
  - Access:Offline Access
  - Journeys:Read, Write, Execute, Activate/Stop/Pause/Resume/Send/Schedule, Delete
  - List and Subscribers:Read, Write
  - Data Extensions:Read, Write
  - File Locations:Read, Write
  - Webhooks:Read, Write
- Click on Button "Save"

- In the next step we will create the custom activity configuration
  - Click on "Add Components"
  - In Screen "Choose Your Component Type" -> Journey Builder Activity
    - Add a name to Custom Activity
    - Add a Category "Custom" It can be whatever you think is best.
    - Add URL to your server example https://someexample.herokuapp.com/

- Don't forget to go to "Access" and add permission to your Marketing Cloud user and the BU that you will use the customized activity.    

### Important points - Copy the items below after settings - Environment variables.
- PackageId - Your application id will need to be added to the .env file, 
- JWT Signing Secret - This secret is used to decrypt the JWT token.

- Replace the variables in the .env file.
  - BASE_URL - Domain of your server example https://someexample.herokuapp.com
  - JWT_SECRET - Copy of JWT Signing Secret
  - APPLICATIONID - Copy of PackageId

### Author
Bruno Smith Lopes Ribeiro - Salesforce Architecture Lead - bruno_smith10@hotmail.com

### Sources
https://www.cloudkettle.com/blog/using-entry-source-data-in-journey-builder-custom-activities

#salesforce #sfmc #custom-activity #journey-builder #marketingcloud #nodejs
