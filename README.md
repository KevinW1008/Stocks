# Stock Modeling Project 
Collaborators: 
Neil Shah: neilshah20@gmail.com 
Kevin Wang: kwang10082000@gmail.com
Nicholas Zhang: jazhang1999@gmail.com 

# Objectives
1. Create a front-end interface with React that will communicate with back-end API from Flask. 
2. Showcase the ability to search different companies and pull their respective stock data. Then showcase a model that graphs their historical/current data
3. Practice using machine learning tools such as Scikit-learn and Prophet

# Showcase of Product
1. This is the main landing page. Two figures will be shown on this page. This is the first figure:
![1](https://github.com/KevinW1008/Stocks/blob/master/Repo_images/1.PNG?raw=true)

2. This is the second figure. Links in the footer are active. They can take you to our LinkedIn pages, our Github project repo and personal repos, as well as useful links if one wishes to dive deeper in the world of finance and stocks: 
![2](https://github.com/KevinW1008/Stocks/blob/master/Repo_images/2.PNG?raw=true)

3. One can search a new company by inputing a valid Stock Ticker. Here we will be searching up Apple Inc. The page will update the figures. Invalid stock tickers will maintain the previous figures, allowing you to reinput.
![2](https://github.com/KevinW1008/Stocks/blob/master/Repo_images/3.PNG?raw=true)
![2](https://github.com/KevinW1008/Stocks/blob/master/Repo_images/4.PNG?raw=true)
![2](https://github.com/KevinW1008/Stocks/blob/master/Repo_images/5.PNG?raw=true)



# Languages - Frameworks - Tools used
* Python (Scikit-learn; Pandas; Prophet; Matplotlib)
* JavaScript
* HTML/CSS
* React
* Flask

# How to Run the Project
To run this build:
* First, go to `/src/` and run the flask commands: `export FLASK_APP=backend` or `set FLASK_APP=backend` if running in a Windows development enviroment, then `flask run`
* Next, go to `/src/frontend/` and run `npm start`

# FullStackDevelopmentAlpha
This folder includes numerous versions of our React and Python code. A "Python Stock Modeling" folder specifically includes a variety of different models. Many were not included in the final product simply due to selection. View at your leisure.

# React Interface (Front-end)

* Includes one new directory ReactSandbox
* Primarily a mix of javascript using JSX and the React library and good old HTML/CSS. Still in development
* Will require the python code as a backend, and Flask to help with that transition (to be implemented later)

To run, you will need to properly download the appropriate enviroment (instructions below). You will only need to follow Steps 3 and 4. Then you can git pull the ReactSandbox in and remove whatever the default package is

Link is: https://medium.com/@fiqriismail/setup-wsl-on-windows-10-for-your-javascript-development-with-visual-studio-code-f63f75841e5f

I would highly reccomend you go by the way of Ubuntu, but there is also a Windows option if you are so inclined

There are also some useful websites to catch up on how all this works. I will also be adding in documentation as the design is finalized and more complicated material is added in. 

To run the simulation, go to `/website/`, and run the command `npm start` to see the website. It is also possible to modify files in the public and src directories (which contain the HTML/CSS/Javascript that make up the website) and see changes in real time while the website is running.

Websites:
* https://scrimba.com/g/glearnreact
* https://www.youtube.com/watch?v=nusgoj74a3Y (kind of long, but good for some advanced stuff like CSS)

HTML/CSS Resources:
* https://www.w3schools.com/cssref/css_colors.asp (values for CSS)

# Flask App (Python Backend)
To Start a Flash App run these three commands:
1. export FLASK_APP=backend 
2. FLASK_ENV=development
3. flask run



