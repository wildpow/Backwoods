import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      response: ''
    }
  }
  componentDidMount() {
    axios.get("http://localhost:8000/")
    .then(res => {
      this.setState({response: res.data})
    })
  }
  render() {
    return (
      <div>
        {this.state.response}
        <h1>BackWoods!</h1>
      </div>
    );
  }
}

export default App;
