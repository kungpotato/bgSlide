import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";

class Page extends Component {
  render() {
    console.log("test", this.props.title);
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.bgImg})`,
          padding: "20px"
        }}
      >
        <Fade in={this.props.isFade}>
          <h1
            style={{
              padding: "0",
              margin: "8px",
              color: "#fff",
              height: "30px"
            }}
          >
            {this.props.title}
          </h1>
        </Fade>
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
