import React from "react";
import axios from "axios";

class Dio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Bad Jokes</h1>
        <p>{this.state.quote}</p>
        <button type="button" onClick={this.getQuote}>
          Ceci n'est pas un button
        </button>
      </div>
    );
  }

  getQuote = () => {
    axios
      .get("http://api.icndb.com/jokes/random")
      .then(response => this.setState({ quote: response.data.value.joke }));
  };
}

export default Dio;
