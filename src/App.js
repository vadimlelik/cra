import React, { Component } from "react";

class App extends Component {
  constructor(){
    super()
    this.handleClikPlus = this.handleClikPlus.bind(this)
    this.handleClikMinus = this.handleClikMinus.bind(this)
  }
  state = {
    count: 0,
  };


  handleClikPlus (){
    this.setState((prevState)=>({count:prevState.count+1}))
  }
  handleClikMinus (){
    this.setState((prevState)=>({count:prevState.count-1}))
  }

  render() {
    return <>
    <div>{this.state.count}</div>
    <button onClick={this.handleClikPlus}>+</button>
    <button onClick={this.handleClikMinus}>-</button>

    </>;
  }
}

export default App;
