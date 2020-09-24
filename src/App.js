import React from 'react';
import styled from './App.module.css';
import Post from './Post/Post';

function App() {
  return (
    <div className={styled.app}>
      <div className={styled.header}>
        <img
         className={styled.headerImage}
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp6HPVhiV-Y8A3dplMSqyJz32F2B-QMKn09A&usqp=CAU'
         alt=''
         />
      </div>

      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </div>
  );
}

export default App;
