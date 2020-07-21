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
      <div className="content">
        <img width="800" alt="timer" src={require("./DualLine.png")} />
        <p className="para">
          The model above graphs the Adjusted Close price, 100 day rolling
          average, as well as the volume of purchases made for the specified
          company.
        </p>

        <img width="800" alt="timer" src={require("./Projection.png")} />
        <p className="para">
          The model above graphs the Adjusted Close prices starting from 2015 to
          today's date. Using the machine leanring tool, Scikit-Learn, a
          percentage of the data is trained upon and used to predict a model for
          the remaining percentage of data.
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
          style={{ float: "left" }}
          src={require("./Projection.png")}
        />
        <p className="para" style={{ paddingTop: "25px" }}>
          The model above graphs the Adjusted Close prices starting from 2015 to
          today's date. Using the machine leanring tool, Scikit-Learn, a
          percentage of the data is trained upon and used to predict a model for
          the remaining percentage of data.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
