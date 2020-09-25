import React, { useEffect, useState } from 'react';
import styled from './App.module.css';
import Post from './Post/Post';
import { db } from './firebase'
import Login from './Login/Login';


function App() {
  const [posts, setPosts] = useState([])

     
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()}
        )))
    })
  }, [posts])

  return (
    <div className={styled.app}>
      <div className={styled.header}>
        <img
         className={styled.headerImage}
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp6HPVhiV-Y8A3dplMSqyJz32F2B-QMKn09A&usqp=CAU'
         alt=''
         />
      </div>
      <Login/>
      {
        posts.map(({id, post})=>(
          <Post 
            key={id} 
            username={post.username} 
            caption={post.caption} 
            imageUrl={post.imageUrl}
          />
        ))
      }
    </div>
  );
}

export default App;
