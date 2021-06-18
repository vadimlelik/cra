import React from 'react';
import Post from './Post';

const Posts = (props)=>{
    const {posts,removePosts} = props
    return (
      <>


      {posts.map(({name , id,})=> {
        return(

            <Post key={id} name={name} id={id} removePosts={removePosts}
            />

        )
      })}
    
      </>
    );
}


export default Posts