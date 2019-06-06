import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    new window.google.maps.Map(document.getElementById("myMap"), {
      center: { lat: 13.8818364, lng: 100.6314466 },
      zoom: 10,
      gestureHandling: "greedy"
    });
  }

  render() {
    return <div style={{ width: "100%", height: "100%" }} id="myMap" />;
  }
}

export default GoogleMap;
