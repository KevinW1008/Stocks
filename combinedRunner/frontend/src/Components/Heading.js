import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

function Heading() {
  return (
    <div
      style={{
        background: "#1B1C1D",
      }}
    >
      <Header
        as="h1"
        content="Stock Modeling"
        inverted
        style={{
          fontSize: "6em",
          fontWeight: "normal",
          fontFamily: "Avenir",
          paddingTop: "25px",
        }}
      />
      <Header
        as="h2"
        content="Stock Data and Predictions"
        inverted
        style={{
          fontSize: "2.5em",
          fontWeight: "normal",
          paddingBottom: "25px",
        }}
      />
    </div>
  );
}

export default Heading;
