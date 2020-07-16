import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Input, Form } from "semantic-ui-react";

function App() {
  const [myVar, setMyVar] = useState("");
  const [stockTicker, setStockTicker] = useState("");
  const [imageName, setImageName] = useState("defaultImage");

  // This function is supposed to prevent the submission of the form from refreshing the page,
  // but I'm not sure if it's working as intended or not. Seems like it may be
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      {
        // Attempting to make the submission of the form run the handleSubmit function above
      }
      <Form onSubmit={handleSubmit}>
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
              })
                .then((response) => response.json())
                .then((data) => setImageName(data["name"]));
            }}
          >
            Submit
          </Button>
        </Form.Field>
      </Form>
      {myVar}
      <div>
        {
          // The image source now points to the file with the stock ticker's name
          // so that each stock will produce a file of its own (ex: GOOGL.png). This was meant to fix
          // the issue of refreshing caused by the file being displayed to be deleted and rewritten but
          // the issue is still happening. When I type a stock ticker it seems like it is displaying
          // the new image that I want correctly for a split second without refreshing the page but then
          // for some reason, the page still decides to refresh after and revert back to the default timer image
          // that I'm using as a placeholder. This is the roadblock that I left off on and am not sure how to fix
          // yet.
        }
        <img
          width="500"
          alt="timer"
          src={require(`./images/${imageName}.png`)}
        />
      </div>
      {stockTicker} Stock
    </div>
  );
}

export default App;
