import React, { useState } from "react";
import "./App.css";
import { Button, Input, Form } from "semantic-ui-react";

function App() {
  // Allows the website user to modify the stock ticker to look up
  const [stockTicker, setStockTicker] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
