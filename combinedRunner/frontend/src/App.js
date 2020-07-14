import React, { useState } from "react";
import "./App.css";
import { Button, Input, Form } from "semantic-ui-react";
import { Img } from "react-image";
import VisibilitySensor from "react-visibility-se";

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
            placeholder="Search for a S&P 500 Company..."
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
      </div>
      {stockTicker} Stock
    </div>
  );
}
//<img width="500" alt="timer" src={require("./DualLine.png")} />
export default App;
