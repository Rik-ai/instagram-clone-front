import React, { useEffect, useState } from 'react';
import styled from './App.module.css';
import Post from './Post/Post';
import { db } from './firebase'
import Login from './Login/Login';
import ImageUpload from './ImageUpload/ImageUpload';
import InstagramEmbed from 'react-instagram-embed'


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
      <div className={styled.posts}>
        <div className={styled.postsLeft}>
        {
          posts.map(({id, post})=>(
            <Post 
              postId={id}
              key={id} 
              username={post.username} 
              caption={post.caption} 
              imageUrl={post.imageUrl}
            />
          ))
        }
        </div>
        <div className={styled.postsRight}>
          <InstagramEmbed
            url='https://www.instagram.com/p/CFiRkYIDPkQ/?utm_source=ig_web_copy_link'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
      

      
      {user?.displayName ? (
      <ImageUpload username={user.displayName}/>
      ) : (
        <h3>Sorry you need to login to upload</h3>
      )}
    </div>
  );
}

export default App;
