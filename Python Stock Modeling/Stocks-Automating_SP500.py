#The tickers/symbols in Wikipedia are organized on a table. 
#To handle for this, we're going to use the HTML parsing library, Beautiful Soup.
#We are going to parse the data as see on a website witrh a list of all S&P500 companies
import bs4 as bs
import pickle
#request modules allows us to send http requests. request returns a Response object with all of the reponse data, basically the source code (content, encoding, status, etc)
import requests

import datetime as dt
import os
import pandas_datareader.data as web

########################################################################################
# We are saving the list of S&P500 companies
def save_sp500_tickers():
    response = requests.get("http://en.wikipedia.org/wiki/List_of_S%26P_500_companies")
    #We are turning the source code from wiki page into a BeautifulSoup object, on which we can call methods on
    soup = bs.BeautifulSoup(response.text, "lxml")
    #This is because the table on Wiki page source code is stored as wikitable sortable object
  
    table = soup.find("table", {"class": "wikitable sortable"})

    tickers = [] 
    #tr is html for row, td is cell
    for row in table.findAll("tr")[1:]:
        ticker = row.findAll("td")[0].text
        ticker = ticker.strip('\n')
        tickers.append(ticker)

    #saves this list without accessing wikipedia everytime we run the program
    with open("s&p500tickers.pickle", "wb") as companies:
        pickle.dump(tickers, companies)

    return tickers

########################################################################################
def get_stocks_data(reload_sp500 = False):
    #Default value for parameter is false. We can all this method, pass in
    #in true, and we can reload a new S&P 500 list from wiki
    if (reload_sp500):
        tickers = save_sp500_tickers()
    #Otherwise we will use what we have saved as a pickle object
    else:
        with open("s&p500tickers.pickle" , "rb") as companies:
            tickers = pickle.load(companies)

    if not os.path.exists("stocks_dsets"):
        os.makedirs("stocks_dsets")
    
    start = dt.datetime(2015, 1, 1)
    end = dt.datetime.now()
    for ticker in tickers:
        #{} acts as a place holder for .format
        if not os.path.exists("stocks_dsets/{}.csv".format(ticker)):
            data = web.DataReader(ticker, "yahoo", start, end)
            data.reset_index(inplace = True)
            data.set_index("Date", inplace = True)
            data.to_csv("stocks_dsets/{}.csv".format(ticker))
        else:
            #We are only pulling data once
            print("Already have {}".format(ticker))

########################################################################################
get_stocks_data()
