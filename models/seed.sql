DROP DATABASE IF EXISTS stocksDB;
CREATE DATABASE stocksDB;
USE stocksDB;

CREATE TABLE users (
	id INT(5) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(20) NOT NULL,
	initial_budget INT(5) DEFAULT 10000
);

CREATE TABLE savedStocks (
    id INT(5) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_id INT,    
    symbol VARCHAR (50) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    date_api VARCHAR(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE ownedStocks (
    id INT(4) AUTO_INCREMENT PRIMARY KEY NOT NULL,
	symbol VARCHAR(50) NOT NULL,
    purchase_price DECIMAL(10,2) NULL,
    date_api VARCHAR(20) NOT NULL,
    user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE soldStocks (
	id INT(4) AUTO_INCREMENT PRIMARY KEY NOT NULL,
	symbol VARCHAR (50) NOT NULL,
    sell_price DECIMAL(10,2) NULL,
    date_api VARCHAR(20) NOT NULL,
    user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(id)
);
