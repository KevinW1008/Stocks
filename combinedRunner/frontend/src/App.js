import React, { useState } from "react";
import "./App.css";
import { Button, Input, Form, TableFooter } from "semantic-ui-react";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";

function App() {
  // Allows the website user to modify the stock ticker to look up
  const [stockTicker, setStockTicker] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <Heading />
      <Form>
        <Form.Field>
          <Input
            onChange={(e) => setStockTicker(e.target.value)}
            onSubmit={(e) => handleSubmit(e)}
            icon="search"
            placeholder="Enter a Stock Ticker..."
          />
        </Form.Field>

        <Form.Field>
          <Button
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
            Submit
          </Button>
        </Form.Field>
      </Form>

      <div>
        <img width="500" alt="timer" src={require("./DualLine.png")} />
        <img width="500" alt="timer" src={require("./Projection.png")} />
      </div>

      {/* Kevin's Manifesto */}
      <div>
        <p id="p1">
          The model on the left graphs the Adjusted Close price, 100 day rolling
          average, as well as the volume of purchases made for the user defined
          company.
        </p>
        <p id="p2">
          The model on the right graphs the Adjusted Close prices starting from
          2015 to today's date. Using Scikit-Learn, machine learning tool, it
          takes a percentage of the data, trains it, and then predicts a model
          on the remaing percentages of the data.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
