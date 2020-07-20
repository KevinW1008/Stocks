import pandas as pd
import mplfinance as mplt



####################################################################
dtable = pd.read_csv("TSLA.csv", parse_dates=True, index_col=0)


dcandle = dtable["Adj Close"].resample("30D").ohlc()

#To plot candlestick model
mplt.plot(dcandle, type = "candle", ylabel = "Stock Price ($)")



