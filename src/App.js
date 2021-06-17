import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isCouting: true,
    posts:[
      {id:'123', name:'JS Basics' },
      {id:'1234', name:'JS Basics' },
      {id:'12432', name:'JS Basics' },
      {id:'12312313', name:'JS Basics' },
    ]
  };

  // componentDidMount(){
  //   const userCount =  localStorage.getItem('timer')
  //   if(userCount){
  //     this.setState({count: +userCount})
  //   }
  // } 

  // componentDidUpdate(){
  //   localStorage.setItem('timer', this.state.count)
  // }
  // componentWillUnmount(){
  //   clearInterval(this.timeId)
  // }


  // handleClikStart = () => {
  //   this.setState({isCouting:false});
  //   this.timeId = setInterval(() => {
  //     this.setState({count:this.state.count+1})
  //   }, 1000);
  // };

  // handleClikStop = () => {
  //   this.setState({isCouting:true});
  //   clearInterval(this.timeId)
  // };

  // handleClikReset =() => {
  //   this.setState({isCouting:false , count:0})
  //   clearInterval(this.timeId)
  // }

  render() {
    const posts = this.state.posts
    return (
      <>
      {posts.map(({name , id})=> {
        return(<h1 key={id}>{name}</h1>)
      })}
        {/* <h1>React timer</h1>
        <div>{this.state.count}</div>
        {this.state.isCouting ? <button onClick={this.handleClikStart}>start</button> :<button onClick={this.handleClikStop}>stop</button>}

        <button onClick={this.handleClikReset}>reset</button> */}
      </>
    );
  }
}

export default App;
