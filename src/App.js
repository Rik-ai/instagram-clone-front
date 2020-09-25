import React, { useEffect, useState } from 'react';
import styled from './App.module.css';
import Post from './Post/Post';
import { db } from './firebase'
import Login from './Login/Login';
import ImageUpload from './ImageUpload/ImageUpload';


function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)


     
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
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
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzokQbqKR49iFzydHW3jSvOOK6aEzaXqZE8A&usqp=CAU'
         alt=''
         />
         <Login setUser={setUser} user={user} />
      </div>
      
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
      {user?.displayName ? (
      <ImageUpload username={user.displayName}/>
      ) : (
        <h3>Sorry you need to login to upload</h3>
      )}
    </div>
  );
}

export default App;
