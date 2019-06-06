import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class Page extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.bgImg})`
        }}
      >
        <h1 style={{ padding: "20px", margin: "20px" }}>{this.props.title}</h1>
        <Paper style={{ padding: "10px", margin: "10px", height: "90vh" }}>
          {this.props.children}
        </Paper>
      </div>
    );
  }
}

export default Page;
