# Lancing Application

*Note:* Application in development. To read about the latest version, please refer below

Creators:
*  James Bell
*  Jose Fidel Paredes
*  Negin Jahanbakhsh
*  Nada Saadi

## Overview 
The whole idea that remote work is a permanent trend was the main motivation for this project. Lancing will be providing opportunities to people from other countries who do not have the means to travel to the location of the job. We are aware of and admire other similar freelancer marketplace sites such as UpWork and Fiverr, but companies do not like the fact that anyone can apply to their jobs. That is why we created Lancing, freelancers are matched with jobs depending on their skillset and they are only given the option to apply if they are compatible. This way, companies are getting less applications for the same jobs but the applicants are guaranteed to be potential employees given their skills. Applicants are hired from different cities and countries around the globe based on their talent and qualifications.

## Backend
The backend of the application is implemented in node.js. We chose node.js because of its wide usability in the labor market and its various functionalities and offered libraries. The structure of the backend is as follows:
* Database scripts
* Controllers
* Routes
* Services
* Validation

This type of structure allows an easy and simple way to organize the code. In the database scripts you can find the DDL for the database as well as a sql script to load sample data into the tables. The controllers directory includes the functions that call the queries from the database. The routes include the http methods and the function to call with the respective request method. The services directory has the more logic heavy code, including the login service which handles the log in with the validation called from the Validation directory, and the registration service which after checking to make sure everything is validated like the password length, unique email, password confirmation, then calls the query to insert the data into the User table. 

### Matching Algorithm

The matching algorithm we designed and implemented is a simplified algorithm which works in the following way. To give some context, when a company posts a job, they are given the option to give a custom weight to the category of skills. For example, a technical job like an iOS Developer will prioritize their technical skills, so the job post can give an 80% weight to those types of skills and a 20% weight to soft skills such as communication and languages whereas for a job like graphic designer, the job post could give a 20% weight to technical skills and an 80% weight to soft skills such as creativity and artistic ability. Going back to the algorithm, first the skills required for a given job are retrieved as well as the freelancer skills that match up with the skills required for the job. The number of matched skills is divided by the total number of skills required for the job, and the result is multiplied by the category’s weight. This way, the matched freelancers can get a good idea that they are fit for the job.

### Tools

As mentioned in the glossary, we used many libraries in the backend to further the functionality and security of the app. To further elaborate on a few, we used Passport for our authentication and authorization service especially in the implementation of the login and registration. The useful aspect of Passport is that it also includes functionality for user sessions, so if a user logs in and makes changes and logs out, the next time they log in those changes will still be there. Babel was used to make the program backwards compatible with previous javascript versions, something that is useful at compile time. Multer was used to parse form data, in our case for parsing the data sent during login and registration. Bcrypt was used to hash user passwords in the registration service to add security to the application and keep user’s data safe. Swagger was used for documentation due to its user-friendly interface that is provided when documenting the program. To access the documentation, navigate to the local host’s server /docs. In order to access functions in the backend such as handling login and registration, we used Axios to send requests to the REST endpoint and perform CRUD operations.


## Frontend

The frontend of this application was implemented in Flutter at first, but due to some difficulties in integrating the backend with frontend, we have decided to implement the application interface in React Native. This transition made it a lot easier for us to communicate with JavaScript files and develop our application since all the files in React Native are in javascript. The entire codebase was written in Visual Studio Code editor and we used many libraries and dependencies in the frontend such as handler, fontAwesome5, CreateStackNavigator, React components, etc. To run our codes, we used the Android Studio emulator. This led us to view and improve our application interface on the Android mobile phones. Each screen of the application is written in separate files and exported to the App.js file. We also used Stack in order to navigate between screens. We were able to pass the data from parents to child functions by using props. The React is utilized for both layout and designing of this application.

