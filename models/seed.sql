DROP DATABASE IF EXISTS stocksDB;
CREATE DATABASE stocksDB;
USE stocksDB;

CREATE TABLE users (
	id INT(5) auto_increment PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL,
    password VARCHAR(30) NOT NULL
);

CREATE TABLE savedStocks (
    id int(5) auto_increment primary key not null,
    user_id int,    
    symbol VARCHAR (50) NOT NULL,
    price decimal (10,4) NOT NULL,
    date_api varchar(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

-- CREATE TABLE currentStocks(
-- 	id int(4) auto_increment primary key not null,
--     user_id int,
-- 	symbol VARCHAR (50) NOT NULL,
--     date_api varchar(20) not null,
--     purchase_price decimal(10,4) null,
--     sold boolean default false,
--     sell_price decimal(10,4) null,
-- 	FOREIGN KEY (user_id) REFERENCES users(id)
-- );

CREATE TABLE ownedStocks(
id int(4) auto_increment primary key not null,
	symbol VARCHAR (50) NOT NULL,
    purchase_price decimal(10,4) null,
    date_api varchar(20) not null,
    user_id int,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE soldStocks(
	id int(4) auto_increment primary key not null,
	symbol VARCHAR (50) NOT NULL,
    sell_price decimal(10,4) null,
    date_api varchar(20) not null,
    user_id int,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

-- insert into savedStocks(user_id, symbol, price, date_api) value(2, "FB", 300.00, 2020.05);
-- select * from savedStocks;
-- select users.name, savedStocks.user_id, savedStocks.symbol, savedStocks.price, savedStocks.date_api from savedStocks 
--                       inner join users on users.id=savedStocks.user_id 
--                       where savedStocks.user_id = 3;

-- select ownedStocks.id as stock_ID, users.name, ownedStocks.user_id, ownedStocks.symbol, ownedStocks.purchase_price, ownedStocks.date_api from ownedStocks 
-- inner join users on users.id=ownedStocks.user_id 
-- where and ownedStocks.symbol = "FB" and ownedStocks.user_id = 2;
-- insert into ownedStocks (symbol, purchase_price, date_api, user_id) value("TSLA", 100.0, 2019.3, 2);
-- select * from ownedStocks;

-- SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
-- select ownedStocks.user_id, users.name, ownedStocks.symbol, ownedStocks.purchase_price,  
--                       soldStocks.sell_price from soldStocks inner join ownedStocks on ownedStocks.user_id = soldStocks.user_id 
--                       inner join users on ownedStocks.user_id = users.id 
--                       where ownedStocks.symbol = "FB" and users.id =2;
-- insert into users(name, email, password) values( "poudel", "aayanssdsgmail.com", "passsdsword");
-- insert into users(name, email, password) values( "naryan", "aayan@gmail.com", "password");
-- select * from users;
-- insert into soldStocks (symbol, sell_price, date_api, user_id) value("TSLA", 300.0, 2019.3, 2);

-- select users.name, soldStocks.user_id, soldStocks.symbol, soldStocks.sell_price, soldStocks.date_api from soldStocks 
--                       inner join users on users.id=soldStocks.user_id 
--                       where soldStocks.user_id = 2;

-- select * from soldStocks;
-- select ownedStocks.user_id, users.name, ownedStocks.symbol, ownedStocks.purchase_price,  soldStocks.sell_price from soldStocks inner join ownedStocks on ownedStocks.user_id = soldStocks.user_id inner join users on ownedStocks.user_id = users.id where users.id = 2;
