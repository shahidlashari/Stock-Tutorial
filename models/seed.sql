DROP DATABASE IF EXISTS stocksDB;
CREATE DATABASE stocksDB;

USE stocksDB;

CREATE TABLE stocksE(
	symbol VARCHAR (50) NOT NULL,
    name VARCHAR (50) NOT NULL,
    region VARCHAR (50) NOT NULL,
    marketOpen decimal (10,2) NOT NULL,
    marketClose decimal (10,2) NOT NULL,
    timeZone TIME  NOT NULL,
    currency decimal(15,2) NOT NULL,
    current decimal (10,2) NOT NULL,
    date_api varchar(20)  NOT NULL,
    PRIMARY KEY(symbol)
);

        
         
          