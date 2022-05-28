# Lancing Application

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

