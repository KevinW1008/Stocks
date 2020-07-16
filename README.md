# Stock Modeling Project 
Collaborators: 
Neil Shah: neilshah20@gmail.com 
Kevin Wang: kwang10082000@gmail.com
Nicolas Zhang: jazhang1999@gmail.com 

# Objectives
1. Create a front-end interface with React that will communicate with back-end API from Flask. 
2. Showcase the ability to search different companies and pull their respective stock data. Then showcase a model that graphs their historical/current data as well as predictions by implementing rudimentary machine learning tools

# Languages - Frameworks - Tools used
* Python
  -Scikit-learn
  -Pandas
  -Prophet
  -Matplotlib
* JavaScript
* React
* Flask
* HTML/CSS
* JSON
* CSV

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
1. export FLASK_APP=backend #use set if working on windows#
2. FLASK_ENV=development
3. flask run

# combinedRunner (7/10/20)
As of today, we have succeeded in combining the backend and frontend into a rudimentary application. There are many bugs and issues that crop up, so we will be working to fix those over time. However, we now have a model to build off of and improve with some quality of life changes.

The directory `combinedRunner` is an offshoot of Neil's code that we submitted today with the below mentioned modifications:
* Moved some files around and edited paths, so that they make sense and are more readily accessible
* Kevin's python program use to produce a .csv file every time it was run. This was necessary to produce the graph, but not needed afterwards. The program now removes the .csv file after creating the graph, just before exiting with a return value of 0
* Some test functions in Neil's code that had no use. Those functions have now been removed. 
* In the __init__.py, added some safety checks that were reccomended by the flask website

To run this build:
* First, go to `/combinedRunner/` and run the flask commands, `export FLASK_APP=backend` or `set FLASK_APP=backend` if running in a Windows development enviroment, then `flask run`
* Next, go to `/combinedRunner/frontend/` and run `npm start`


