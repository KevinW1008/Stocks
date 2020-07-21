import React, { useState } from "react";
import "./App.css";
import { Button, Input, Form, TableFooter } from "semantic-ui-react";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";

function App() {
  // Hook: Allows the website user to modify the stock ticker to look up
  const [stockTicker, setStockTicker] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      {/* Header is constructed in Header.js */}
      <Heading />

      {/* Creating the submit button */}
      <div
        class="ui action input"
        style={{ paddingTop: "25px", paddingBottom: "25px" }}
      >
        <input
          type="text"
          onChange={(e) => setStockTicker(e.target.value)}
          onSubmit={(e) => handleSubmit(e)}
          placeholder="Enter a Stock Ticker..."
        />
        <button
          className="ui button"
          style={{ background: "#1B1C1D" }}
          onClick={async () => {
            const response = await fetch("/fetch_stock", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: stockTicker }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
          }}
        >
          <text style={{ color: "#FFFFFF" }}>Search</text>
        </button>
      </div>

      {/* Content of our page */}
      <div
        style={{
          paddingTop: "25px",
          borderBottom: "solid 1px silver",
          overflow: "hidden",
        }}
      >
        <img
          class="ui big image"
          style={{ float: "left", paddingRight: "25px" }}
          src={require("./DualLine.png")}
        />
        <p className="para" style={{ paddingTop: "25px" }}>
          This model graphs the Adjusted Close price, the 100-Day-Rolling
          Average, and the volume of purchases made for the specified company.
          The 100-Day Average is a mid-term trend-following technical indicator.
          It uses 100 day periods of data to analyze the movement of stock
          prices. When the price of a security is above its 100-day moving
          average, it's considered bullish, and when the price is below, it's
          considered bearish.
        </p>
      </div>
      <div
        style={{
          paddingTop: "25px",
          borderBottom: "solid 1px silver",
          overflow: "hidden",
        }}
      >
        <img
          class="ui big image"
          style={{ float: "left", paddingRight: "25px" }}
          src={require("./Projection.png")}
        />
        <p className="para" style={{ paddingTop: "25px" }}>
          This model graphs the Adjusted Close prices starting from 2015 to
          today's date.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
