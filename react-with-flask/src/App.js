import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [myVar, setMyVar] = useState("");

  useEffect(() => {
    fetch("/hello").then((response) =>
      response.json().then((data) => {
        setMyVar(data["message"]);
      })
    );
  });

  return (
    <div className="App">
      {myVar}
      <img alt="timer" src={require("./images/DualLine.png")} />
    </div>
  );
}

export default App;
