import React from 'react';

const Post = (props)=> {
 const {name , removePosts,id } = props 
    return(
        <h1> {name} <button onClick={ ()=> removePosts(id)}> Del</button> </h1>
    )
}
export default Post