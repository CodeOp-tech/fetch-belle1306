import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      location: "",
      weather: null,
      error: false
    };
  }

  handleInput() {
    // handle form input here
  }

  getWeather() {
    // call Open Weather API
  }

  render() {
    return <div>Hello World!</div>;
  }
}

export default App;
