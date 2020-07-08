import datetime as dt
import matplotlib.pyplot as plt
from matplotlib import style
import pandas as pd
import pandas_datareader.data as web

#We can choose different styles of graphs
style.use("bmh")

start = dt.datetime(2015, 1, 1)
end = dt.datetime.now()

df = web.DataReader("TSLA", "yahoo", start, end)


df.to_csv("TSLA.csv")
df = pd.read_csv("TSLA.csv", parse_dates = True, index_col = 0 )



df["100ma"] = df["Adj Close"].rolling(window = 100, min_periods = 0).mean()


plt.figure(figsize= (15,15))

ax1 = plt.subplot2grid((6,1), (0,0), rowspan=5, colspan=1)
ax2 = plt.subplot2grid((6,1), (5,0), rowspan=1, colspan=1, sharex=ax1) #ax2 will always align its x axis with whatever ax1's is, and visa-versa

ax1.set_ylabel("Stock Value/Prices")
ax2.set_ylabel("Number of Shares\nChanging Hands\n(in millions)", size = 10)
ax2.set_xlabel("Year")

ax1.plot(df.index, df['Adj Close'], label ="Adj Close")
ax1.plot(df.index, df['100ma'], label ="100 Rolling Avg")
ax1.legend()
ax2.bar(df.index, df['Volume'], label = "Volume")
ax2.legend()

plt.subplots_adjust(hspace = 1.2)
plt.savefig("DualLine.png", bbox_inches = "tight")