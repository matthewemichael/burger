# Eat-Da-Burger!  
#### A restaurant app built with MySQL, Node, Express, Handlebars and an ORM.  

- - -

## Overview

Eat-Da-Burger! is a full stack restaurant app created with MySQL, Node, Express, Handlebars and an ORM (object-relational mapper) that lets users input the names of burgers they'd like to eat, devour them and throw away. Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area has an `Eat It!` button. When the user clicks it, the burger moves to the right side of the page where it can be thrown away or devoured again. The app stores every burger in a database, whether devoured or not.  

- - -  

## Function

This project uses MySQL, Node, Express, Handlebars and an ORM (Object Relational Mapper). Node and MySQL are used to query and route data in the application. Express is the backend web framework used for this application, and Handlebars is a templating language that is used to generate the HTML.  

This project also follows the MVC (Model-View-Controller) design pattern. The MVC design pattern assigns objects in the application one of three roles (model, view, or controller) and defines the way the different parts of the application communicate with one another.  


![screenshot](/public/assets/images/burger-screenshot.png)

- - -

## Setup

### Clone this repository to your computer:
```
git clone https://github.com/matthewemichael/burger.git
```
To run this application, you will need [MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

### Install MySQL  

In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the `burgers_db` database and the `burgers` table with the SQL code found in `schema.sql` and `seeds.sql`. Run this code inside your MySQL client to create and populate the database.  

Once you have the `burgers_db` database set up, you will need to edit the `connection.js` file and enter the user and password to access your database.  

### Install Packages  

Type these commands in the command line:

```
cd burger
npm install
```  

### Run Application Locally  

At the command line enter:
```
node server.js
```
- You should receive a message `Server listening on PORT: 8080` in the terminal window.  
- The port number can be changed in the `server.js` file if necessary.  

The application can now be accessed in a web browser at:
```
localhost:8080
```
- - -

## Technologies Used

* [Bootstrap](https://getbootstrap.com/)
* [JavaScript](https://www.javascript.com)
* [MySQL](https://www.mysql.com)
* [Handlebars](https://handlebarsjs.com/)
* [Node.Js](https://nodejs.org/en/)
* Node Packages
  * [MySQL](https://www.npmjs.com/package/mysql)
  * [Express](https://www.npmjs.com/package/express)
  * [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
