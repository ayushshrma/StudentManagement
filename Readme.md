CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Installation
 * Structure
 * Testing 
 * Contact

 ## Introduction

 In this project, I have created a RESTful CRUD API that allows user to create, read, update in student management system. The API is implemented using Node.js, Express, and MongoDB.I have used the Mongoose ORM to create the database schema.
 
 I have start by building the API using the RESTful design pattern. The API is implemented using the following HTTP methods: PUT, GET, POST, and DELETE.
 Building the teacher and students model and different routes for handling all the CRUD operations. 
 
 Finally, I have test my REST APIs using Postman. 

 ## Requirements

 * Node.js
 * Express
 * MongoDB
 * Mongoose ODM
 * Postman
 * MongoDB Atlas

 ## Installation

 1. Clone the repository
 2. Install the dependencies using npm
 3. Start the server using the command "node index.js"
 4. Access the API using the following URL:
  http://localhost:8080/api/student.
  http://localhost:8080/api/teacher.
 5. Test the API using Postman.

 ## Structure

 The project is structured as follows:

 * **index.js**: Contains the server code.
 * **models**: Contains the teacher & student models.
 * **routes**: Contains the routes for handling the CRUD operations.
 * **test**: Contains the test code.
 * **config**: Contains the configuration files.
 * **controllers**: Contains the controllers for handling the API requests.
 * **images**: Contains the images for postman api tests.

 ## Testing

 The project is tested using Postman.

## Add a new student using POST /api/student API.
 
 ## Get all the Students using GET /api/student API.
 
 <img   alt="" src="https://raw.githubusercontent.com/ayushshrma/StudentManagement/main/images/postman/Read_students.gif" />
 
## Getting a student using GET /api/student/{id} API.
  
## Updating a student using PUT /api/student/{id} API.
  
## Deleting a student using DELETE /api/student/{id} API.
 
   <img   alt="" src="https://raw.githubusercontent.com/ayushshrma/StudentManagement/main/images/postman/deletestudent.gif" />

## Add a new teacher using POST /api/teacher API.

## get list of students assigned to teacher using GET /api/student/:teacher 

 <img alt="" src="https://raw.githubusercontent.com/ayushshrma/StudentManagement/main/images/postman/Read_studentsbyteacher.gif" />

## get teacher by Subject using GET /api/teacher/:subject

<img  alt="" src="https://raw.githubusercontent.com/ayushshrma/StudentManagement/main/images/postman/Read_teacherbysubject.gif" />

## get student by section and class using GET /api/student/:section/:class

<img   alt="" src="https://raw.githubusercontent.com/ayushshrma/StudentManagement/main/images/postman/Readstudentsbysection.gif" />

## get all teachers using GET /api/teacher

<img   alt="" src="https://raw.githubusercontent.com/ayushshrma/StudentManagement/main/images/postman/Readteacher.gif" />

## Contact
  E-mail: [sharmaayush20999@gmail.com](mailto:sharmaayush20999@gmail.com)
  Website: [http://ayushshrma.github.io](http://ayushshrma.github.io)
  Linkedin: [https://www.linkedin.com/in/ayushsharmaa](https://www.linkedin.com/in/ayushsharmaa)





