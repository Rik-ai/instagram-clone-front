import React, { useEffect, useState } from 'react'
import styled from './App.module.css'
import Post from './Post/Post'
import { db } from './firebase'
import Login from './Login/Login'
import ImageUpload from './ImageUpload/ImageUpload'
import InstagramEmbed from 'react-instagram-embed'
import axios from './axios'


function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)


     
  useEffect(() => {
    const fetchPosts = async () => 
      await axios.get('/sync').then(response => {
        console.log(response)
        setPosts(response.data)
      })

      fetchPosts()
  }, [])

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
            posts.map((post)=>(
              <Post 
                user={user}
                postId={post._id}
                key={post._id} 
                username={post.user} 
                caption={post.caption} 
                imageUrl={post.image}
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
      <div className={styled.uploader}>
        {user?.displayName ? (
          <ImageUpload username={user.displayName}/>
        ) : (
          <h3> </h3> //Sorry you need to login to upload
        )}
      </div>

    </div>
  )
}

export default App
