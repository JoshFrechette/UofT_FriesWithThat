-- create database and table schema here
DROP DATABASE IF EXISTS resto_db;

CREATE DATABASE resto_db;
 
USE resto_db;

CREATE TABLE burger (
    id int AUTO_INCREMENT NOT NULL,
    choice TEXT NOT NULL,
    PRIMARY KEY (id)
);