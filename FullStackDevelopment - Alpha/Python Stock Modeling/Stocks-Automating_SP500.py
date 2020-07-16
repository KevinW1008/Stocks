#The tickers/symbols in Wikipedia are organized on a table. 
#To handle for this, we're going to use the HTML parsing library, Beautiful Soup.
#We are going to parse the data as see on a website witrh a list of all S&P500 companies
import bs4 as bs
import pickle
#request modules allows us to send http requests. request returns a Response object with all of the reponse data, basically the source code (content, encoding, status, etc)
import requests

import datetime as dt
import os
import pandas as pd
import pandas_datareader.data as web

import matplotlib.pyplot as plt
import numpy as np

plt.style.use("fivethirtyeight")
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
        if not os.path.exists('stock_dfs/{}.csv'.format(ticker)):
        #{} acts as a place holder for .format
            try:
                data = web.DataReader(ticker, "yahoo", start, end)
            except KeyError:
                pass
            data.reset_index(inplace = True)
            data.set_index("Date", inplace = True)
            data.to_csv("stocks_dsets/{}.csv".format(ticker))
        else:
            print('Already have {}'.format(ticker))
########################################################################################
def data_compliation():
    with open("s&p500tickers.pickle","rb") as file:
        tickers = pickle.load(file)

    main_df = pd.DataFrame()

    for ticker in tickers:
        df = pd.read_csv("stocks_dsets/{}.csv".format(ticker))
        df.set_index("Date", inplace= True)
        df.rename(columns={"Adj Close":ticker}, inplace= True)
        df.drop(["Open", "High", "Low", "Close", "Volume"], 1, inplace= True)
        if main_df.empty:
            main_df = df
        else:
            main_df = main_df.join(df, how='outer') 
    
    print(main_df.head())
    main_df.to_csv('sp500_joined_closes.csv')
########################################################################################
def visualize_Data():
    df = pd.read_csv('sp500_joined_closes.csv')
    df_corr = df.corr()
    df_corr.to_csv('sp500corr.csv')
    corr_graph = df_corr.values

    fig = plt.figure()
    ax1 = fig.add_subplot(111)

    heatmap= ax1.pcolor(corr_graph, cmap=plt.cm.RdYlGn)
    fig.colorbar(heatmap)

    #Add axis tick marks with their respective companies
    ax1.set_xticks(np.arange(corr_graph.shape[1]) + 0.5, minor=False)
    ax1.set_yticks(np.arange(corr_graph.shape[0]) + 0.5, minor=False)
    
    ax1.invert_yaxis()
    ax1.xaxis.tick_top()

    column_labels = df_corr.columns
    row_labels = df_corr.index
    ax1.set_xticklabels(column_labels)
    ax1.set_yticklabels(row_labels)

    plt.xticks(rotation=90)
    #This sets the limits of our range
    heatmap.set_clim(-1,1)
    plt.tight_layout()
    plt.show()


visualize_Data()