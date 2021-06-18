import React, { Component } from "react";
import Posts from "./Component/Posts";

class App extends Component {
  state = {
    count: 0,
    isCouting: true,
    posts: [
      { id: "123", name: "JS Basics" },
      { id: "1234", name: "JS React" },
      { id: "12432", name: "JS Dart" },
      { id: "12312313", name: "JS C#" },
    ],
  };

  removePosts=(id)=>{
   this.setState({posts:this.state.posts.filter(post => post.id !== id)})
  } 

  render() {
    const { posts } = this.state;
    return (
    <Posts posts={posts} 
    removePosts={this.removePosts}

    />
    );
  }
}

export default App;
