DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL auto_increment,
    name VARCHAR(250) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);