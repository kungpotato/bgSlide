import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class Page extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.bgImg})`,
          padding: "20px"
        }}
      >
        <h1 style={{ padding: "20px", margin: "20px", color: "#fff" }}>
          {this.props.title}
        </h1>
        <Paper
          style={{
            padding: "10px",
            margin: "10px",
            height: window.innerHeight - 200
          }}
        >
          {this.props.children}
        </Paper>
      </div>
    );
  }
}

export default Page;
