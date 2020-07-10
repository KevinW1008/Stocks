import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Input, Form } from "semantic-ui-react";

function App() {
  const [myVar, setMyVar] = useState("");
  const [stockTicker, setStockTicker] = useState("");

  useEffect(() => {
    fetch("/hello").then((response) =>
      response.json().then((data) => {
        setMyVar(data["message"]);
      })
    );
  });

  return (
    <div className="App">
      <Form>
        <Form.Field>
          <Input
            onChange={(e) => setStockTicker(e.target.value)}
            icon="search"
            placeholder="Stock Ticker..."
          />
        </Form.Field>
        <Form.Field>
          <Button
            onClick={async () => {
              const response = await fetch("/fetch_stock", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: stockTicker }),
              });

              if (response.ok) {
                console.log("response worked");
              }
            }}
          >
            Submit
          </Button>
        </Form.Field>
      </Form>
      {myVar}
      <div>
        <img width="500" alt="timer" src={require("./images/DualLine.png")} />
      </div>
      {stockTicker} Stock
    </div>
  );
}

export default App;
