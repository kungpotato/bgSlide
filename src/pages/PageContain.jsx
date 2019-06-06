import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import Page from "../components/Page";
import GoogleMap from "../components/GoogleMap";
import Report from "../components/Report";
import Contact from "../components/Contact";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import "../styles.css";

class PageContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      mapTitle: "Map",
      reportTitle: "Report",
      contactTitle: "Contact",
      isFade: false
    };
    this._pageScroller = null;
    // this.goToReport = React.createRef();
  }

  goToPage = e => {
    this._pageScroller.goToPage(e);
  };

  pageOnChange = number => {
    this.setState({
      currentPage: number,
      isFade: true
    });
    setTimeout(() => {
      this.setState({
        isFade: false
      });
    }, 1000);
  };

  render() {
    return (
      <div className="demo-page-contain" style={{ background: "#cfd8dc" }}>
        <AppBar
          position="fixed"
          style={{ background: "rgba(0,0,0,0.3)", boxShadow: "none" }}
        >
          <Toolbar>
            <Button onClick={() => this.goToPage(0)} style={{ color: "#fff" }}>
              map
            </Button>
            <Button onClick={() => this.goToPage(1)} style={{ color: "#fff" }}>
              report
            </Button>
            <Button onClick={() => this.goToPage(2)} style={{ color: "#fff" }}>
              contact
            </Button>
          </Toolbar>
        </AppBar>
        <ReactPageScroller
          ref={c => (this._pageScroller = c)}
          pageOnChange={this.pageOnChange}
          animationTimer={1000}
          blockScrollUp={true}
          blockScrollDown={true}
        >
          <Page
            bgImg="https://cdn.pixabay.com/photo/2019/06/04/19/54/norway-4252178_960_720.jpg"
            title={this.state.mapTitle}
            isFade={this.state.isFade}
          >
            <GoogleMap eventKey={0} />
          </Page>
          <Page
            bgImg="https://cdn.pixabay.com/photo/2019/06/01/10/08/macro-4243782_960_720.jpg"
            title={this.state.reportTitle}
            isFade={this.state.isFade}
          >
            <Report eventKey={1} />
          </Page>
          <Page
            bgImg="https://cdn.pixabay.com/photo/2019/05/26/14/55/ducks-4230463_960_720.jpg"
            title={this.state.contactTitle}
            isFade={this.state.isFade}
          >
            <Contact eventKey={2} />
          </Page>
        </ReactPageScroller>
      </div>
    );
  }
}

export default PageContain;
