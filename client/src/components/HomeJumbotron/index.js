import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

import "./style.css";

const HomeJumbotron = () => (
  <Jumbotron fluid className="background">
    <Container className="jumbotron-text">
      <h1 className="title">Stock Tutorial</h1>
      <h3 className="subtitle-1">
        Learn how to analyze and exchange stocks through a stock portfolio
        emulation!
      </h3>
      <h4 className="subtitle-2">
        Utilizes Alpha Vantage API to display real-time stock data
      </h4>
    </Container>
  </Jumbotron>
);

export default HomeJumbotron;
