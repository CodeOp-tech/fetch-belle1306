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
    this.handleInput = this.handleInput.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  handleInput(event) {
    // handle form input here
    this.setState({ value: event.target.value });
  }

  async getWeather(location) {
    // call Open Weather API
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return result.json();
  }
}
//alert('Get Weather: '+ this.state.value);
//event.preventDefault();

render();
{
  return (
    <form onSubmit={this.handleInput}>
      <label>
        Get Location Weather:
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    //<div><LoadingIndicator is loading={isLoading}/></div>
  );
}

export default App;
