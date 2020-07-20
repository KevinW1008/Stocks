import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./style.css";

function Main() {
  return (
    <div className="main">
      <LeftSide />
      <RightSide />
    </div>
  );
}
export default Main;
