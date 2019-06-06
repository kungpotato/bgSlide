import React, { Component } from "react";
import ReactDOM from "react-dom";
import PageContain from "../src/pages/PageContain";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageContain />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
