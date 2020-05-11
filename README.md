# Project 2-Stock Tutorial

# Team: Shahid Hussain, Norberto Mantohac,Narayan Poudel, Ujwal Kashyap

## URL Links

  1) https://boiling-mesa-48982.herokuapp.com/

  2) https://github.com/shahidlashari/project_2_stockTutorial

## Description

* The Stock Tutorial application works on showing the user how to search up information about stocks and show the user how to buy and sell stocks using opening and closing market data!  

* The application requires the user to log in, saves their information in local storage and give the user a paper money budget of $10,000 to buy and sell stocks.

## User Story

* The user wants to learn more details about stocks but does not know where to start. The Stock Tutorial gives the user a demonstration on how to buy and sell stocks based on their opening and closing prices for the day.

* User needs to create an account in order to access dashboard and user's data will be stored in our database and local storage. 

* User can search for stock of his choice, if he doesn't know the symbol of stock, our search bar has functionality to show the bestmatches stocks even if user enters just one letter.

* User can view the price of desired stock and save it. This perticular stock will apear in stock watchlist and also will be stored in out database in order to make it possible for user to buy it if wants to. 

* User has been alocated $10,000.00 to start with. This will appear in user budget model.

* User can sell stock just clicking on sell and his busget will be updated acoordingly.

* User can logout while pressing logout button and he will be redirected to home page. If he signs in back , his saved stock would be shown in watchlist and stocks he did buy.

* User can view trending page having charts of stock time series (monthly), currency exchange rate, foreign exchange rate (monthly),cryptorating as well as digital currency in the physical market (monthly).

## Technologies

    * Node
    * NPM Express
    * React
    * React-Bootstrap
    * MySql
    * API (Alpha Vantage) (API Docs)
    * GitHub
    * Heroku
    * Travis CI/ESlint
    * Rechart

## Challenges

* Working with React on a larger project created a lot of early confusion with class components , functional components, routes and API calls.

* Dealing with our databases and using the correct queries involving our API calls and our database.

* Deciding on a react chart (npm package) -> canvas.js/chart, react-charts, recharts

* Trending -> Displaying the data from the API call as a chart (specific format)

* Using href from React bootstrap was a bit challenge. After deploying to heroku it doesn’t work. We have to replace href with link tags.


## Screenshot(s)

* Stock Tutorial - Overall Function

![image]()