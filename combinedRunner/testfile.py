import datetime as dt
#### Section to make sure that Xming does not get in the way ####
import matplotlib
matplotlib.use("Agg")
#################################################################
import matplotlib.pyplot as plt
from matplotlib import style
import pandas as pd
import pandas_datareader.data as web
import math

from sklearn import preprocessing, svm
import sklearn.model_selection as sk
from sklearn.linear_model import LinearRegression

import numpy as np


import math

stock_ticker = "MSFT"

def update_stock_ticker(new_ticker):
    global stock_ticker
    stock_ticker = new_ticker

def stockrun():
    style.use("bmh")

    start = dt.datetime(2015, 1, 1)
    end = dt.datetime.now()

    df = web.DataReader(stock_ticker, "yahoo", start, end)

    df["100ma"] = df["Adj Close"].rolling(window = 100, min_periods = 0).mean()

    
    plt.figure(figsize= (15,15))

    ax1 = plt.subplot2grid((6,1), (0,0), rowspan=5, colspan=1)
    ax2 = plt.subplot2grid((6,1), (5,0), rowspan=1, colspan=1, sharex=ax1) #ax2 will always align its x axis with whatever ax1's is, and visa-versa

    ax1.set_ylabel("Stock Value/Prices")
    ax2.set_ylabel("Number of Shares\nChanging Hands\n(in millions)", size = 10)
    ax2.set_xlabel("Year")

    ax1.set_title("%s's Adjusted Close and 100 Day Rolling Data" % stock_ticker, fontsize=36)
    ax1.plot(df.index, df['Adj Close'], label ="Adj Close")

    ax2.set_title("%s's Volume Data" % stock_ticker, fontsize=20)
    ax1.plot(df.index, df['100ma'], label ="100 Rolling Avg")

    ax1.legend()
    ax2.bar(df.index, df['Volume'], label = "Volume")
    ax2.legend()
    plt.subplots_adjust(hspace = 1.2)
    plt.savefig("./frontend/src/DualLine.png", bbox_inches = "tight")

    return {"stock_name": stock_ticker, "price": 0, "year": 2020, "image_src": "./DualLine.png" }


def projectionCalculator():

    style.use("bmh")
    start = dt.datetime(2015, 1, 1)
    end = dt.datetime.now()

    df = web.DataReader(stock_ticker, "yahoo", start, end)
    dfog= df
    #Volatilty of the market are better values for prediciton
    df['HL_PCT'] = (df['High'] - df['Low']) / df['Low'] * 100.0
    df['PCT_change'] = (df['Close'] - df['Open']) / df['Open'] * 100.0

    df = df[['Adj Close', 'HL_PCT', 'PCT_change', 'Volume']]

    #We are forecasting Adjusted Closing Price
    forecast_col = 'Adj Close'
    #Fill any empty columns with -99999 as good practice
    df.fillna(value=-99999, inplace=True)
    #How many days we want to forecast out, lets do 1 percent of the data
    forecast_out = int(.01 * math.ceil(len(df)))

    #new calumn in df that contains shifted values up 
    #Label contains a percentage of training data
    df['label'] = df[forecast_col].shift(-forecast_out)
  

    X = np.array(df.drop(['label'], 1))

    #Shifts the range of the values of -1 to 1
    X = preprocessing.scale(X)
    #Contains data points after forecast_out point
    X_lately = X[-forecast_out:]
    #Contains data points before forecast_out point
    X = X[:-forecast_out]
    df.dropna(inplace=True)
    y = np.array(df['label'])
    
    X_train, X_test, y_train, y_test = sk.train_test_split(X, y, test_size=0.5)

    #n_jobs=-1 ensures the CPU will use all available threads to process
    clf = LinearRegression(n_jobs=-1)
    #This will traing our data
    clf.fit(X_train, y_train)
    confidence = clf.score(X_test, y_test)


    forecast_set = clf.predict(X_lately)
    df['Forecast'] = np.nan

    last_date = df.iloc[-1].name
    last_unix = last_date.timestamp()
    one_day = 86400
    next_unix = last_unix + one_day

    for i in forecast_set:
        next_date = dt.datetime.fromtimestamp(next_unix)
        next_unix += 86400
        df.loc[next_date] = [np.nan for _ in range(len(df.columns)-1)]+[i]


    # print('Our linear regression model computes a beta coefficient (slope) of:')
    # print(clf.coef_[0].round())
    # print('Tomorrow prices is thus to be predicted as:')
    # print((clf.coef_[0] + dfog['Adj Close'][-1]).round())

    plt.figure(figsize= (15,15))
    plt.plot(dfog['Adj Close'], label= 'Adj CLose')
    plt.plot(df['Forecast'], label= 'Forecast')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.legend()
    plt.title('%s\'s Adjusted Close History and Prediction Model' % stock_ticker, fontsize=36)
    plt.savefig("./frontend/src/Projection.png", bbox_inches = "tight") 