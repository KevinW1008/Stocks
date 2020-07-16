import pandas as pd
from fbprophet import Prophet
import datetime as dt
import matplotlib.pyplot as plt
from matplotlib import style
import pandas as pd
import pandas_datareader.data as web

df = pd.read_csv("TSLA.csv")

m = Prophet()
m.fit(df)

future = m.make_future_dataframe(periods=90)
future.tail()

forecast = m.predict(future)
forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail()

fig1 = m.plot(forecast)
plt.show(fig1)
