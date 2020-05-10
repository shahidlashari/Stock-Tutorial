DROP DATABASE IF EXISTS stocksDB;
CREATE DATABASE stocksDB;
USE stocksDB;

CREATE TABLE users (
	id INT(5) auto_increment PRIMARY KEY NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(20) NOT NULL,
	initial_budget int(5) default 10000
);

CREATE TABLE savedStocks (
    id int(5) auto_increment primary key not null,
    user_id int,    
    symbol VARCHAR (50) NOT NULL,
    price decimal (10,2) NOT NULL,
    date_api varchar(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE ownedStocks(
id int(4) auto_increment primary key not null,
	symbol VARCHAR (50) NOT NULL,
    purchase_price decimal(10,2) null,
    date_api varchar(20) not null,
    user_id int,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE soldStocks(
	id int(4) auto_increment primary key not null,
	symbol VARCHAR (50) NOT NULL,
    sell_price decimal(10,2) null,
    date_api varchar(20) not null,
    user_id int,
	FOREIGN KEY (user_id) REFERENCES users(id)
);