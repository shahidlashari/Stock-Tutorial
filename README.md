# Project 2-Stock Tutorial

## Team: [Shahid Hussain](https://github.com/shahidlashari), [Norberto Mantohac](https://github.com/NMantohac), [Narayan Poudel](https://github.com/naryan), [Ujwal Kashyap](https://github.com/usualketchup)

## URL Links

  1) GitHub: https://github.com/shahidlashari/project_2_stockTutorial

  2) Heroku: https://boiling-mesa-48982.herokuapp.com/

## Description

* The Stock Tutorial application provides the user a basic interactive and educational experience of the stock market trade through analyzing a variety of real-time stock data and emulating a stock portfolio. The app utilizes Alpha Vantage API to obtain specific data, such as stock time series, currency & foreign exchange rates, cryptoratings, and digital currencies traded on a specific market. The trending page provides these results in a form of either a chart or a simple text. In addition, there is error handling, so there will be no data returned if the user leaves the input form empty or inputs incorrect values. 

* For the Dashboard page, an alert will pop up if the user hasn't created an account (fake account) through the sign-up form. In the Sign-Up page, the user is able to create an account after providing a valid username, password, and email. Otherwise, there will be errors for each scenario (invalid username, invalid password and email, invalid username and email, etc.). Once the user is successful in creating an accouont, the app will then direct the user straight into the Dashboard page where the user can now save/buy/sell stocks. The stock search input returns the best-matching symbols and market information based on keywords, and from there the user can view stock prices and save them into the stock watchlist. In the stock watchlist, the user can buy (opening price) and sell (closing price) the saved stock, which would then reflect on the user's balance from the initial $10,000 budget. The user is free to logout from their account after pressing the logout button, but a new account must be created again in order to access the Dashboard page. 

* The Stock Tutorial application is done through React with React-Bootstrap Framework for the front-end, whereas Node.js and Express (server) with a MySQL database is done for the back-end. In addition, the general file structure follows the MVC paradigm to allow others an easy access of the work-flow of the files/folders. In the front-end, the use of functional and class components (containers) were used to render the pages, which also included states and vanilla JavaScript functions. Overall, the index.js Javascript files contain variables (const/let), async & await and callback functions, try/catch blocks, arrays/objects, import/exports, if-else statements, for-in loops, destructuring variables, local storage and queries. The necessary data in the local MySQL database are in the seed.sql file, which are for running initial queries. For npm packages, **axios** was used to make API calls to the Alpha Vantage API, and **Recharts** was used to display the data as a line chart with multiple lines (open, high, low, close) average prices of each month for the past year. In addition, **dotenv** was used to hide all the API keys and **mysql2** was to return all queries as promises. For  dev dependencies, **ESLint** was to enforce a cleaner and better coding style, and **concurrently** was to run the localhost of the front and back-end at the same time. 

## User Story

* The user wants to learn more details about stocks, but does not know where to start. The Stock Tutorial app gives the user a demonstration on how to buy and sell stocks based on their opening and closing prices for the day.

* User needs to create an account first in order to access Dashboard, which their data will be stored in our database and local storage. 

* User can search for stock of their choice, but if the user doesn't know the symbol of the stock, the search bar has functionality to show the best matches stocks even if the user enters just one letter.

* User can view the price of desired stock and save it. This particular stock will apear in the stock watchlist and will also be stored in our database, so the user can buy if they want to. 

* User is allocated $10,000.00 to start with and appears in the user's budget model.

* User can sell stock by just clicking on the sell button and the budget will be updated accordingly.

* User can logout after pressing logout button and will be redirected to home page. The user must create an account again in the sign-up form in order to access Dashboard again.

* User can view trending page, which returns data (chart/text) of stock time series (monthly), currency exchange rate, foreign exchange rate (monthly), cryptorating, and digital currency in the physical market (monthly).

## Technologies

    * Visual Studio Code
    * React
    * React-Bootstrap Framework
    * Node.js
    * Express (Server)
    * MySQL Database (MySQL Workbench)
    * API - Alpha Vantage
    * npm - axios, if-env, dotenv, mysql2, and recharts
    * npm (Dev) - ESLint & concurrently
    * Travis CI/ESLint
    * GitHub
    * Heroku & JawsDB add-on

## Challenges

* This project was definitely a lot tougher than we expected, and we experienced and learned many things, but in the end we were able to accomplish a lot of stuff for this project alone! The team is incredibly proud of how this project turned out because in the beginning it felt like a strange and relatively overwhelming idea, but over time we were able to solve each problem using our knowledge, resources, and help from each other and from the TAs/Instructor. This is an invaluable experience to us as junior web developers, and a solid testament of how much we've learned and are able to apply in code!

* The main challenge early on was working with React since we didn't spend much time on it, so we had to refer back to the todo boilerplate and react class activities a lot in order to get a good picture of what we wanted to do. Using React definitely created a lot of early confusion with class/functional components and how they connected with states & props. Another challenge was dealing with our local MySQL database and using the correct queries that involved our API calls and the database itself. In the trending page, the early issue was deciding on a react chart (npm package) to display the data, and we had to go through 2 different ones (Canvas.js/chart and react-charts) before we decided on **Recharts**. Once this was decided, the main issue was actually displaying that data because it needed to be in a specific object format, so the information received from the API call had to be essentially converted into the chart format. A last minute issue was about React-Bootstrap and deploying it to Heroku, and it was regarding the replacement of href tags as Links from 'react-router-dom' and passing the to prop as well. 

* The members in the team learned a lot of different things, but it varies to each person in regards to what they worked on, what they learned and how they were able to solve each problem (either through trial & error, online resources, class videos, or help from each other and form the TAs/Instructor).

* We were all able to solve each problem through continuous effort, good communication, everyday meetings, patience, time management, online resources, and help from the TAs/Instructor!

## Screenshot(s)

* Stock Tutorial - Overall Function (Heroku):

![Stock Tutorial - Overall Function (Heroku):](https://drive.google.com/file/d/1zHej-dCa_UZEOLRB9GcCynfTVeOVNj9I/view)
