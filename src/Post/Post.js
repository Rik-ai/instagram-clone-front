import React from 'react'
import styled from './Post.module.css'
import Avatar from '@material-ui/core/Avatar'
import Comments from './Comments/Comments'


function Post({postId, username, caption, imageUrl}) {
    return (
        <div className={styled.post}>
            <div className={styled.header}>
                <Avatar
                className={styled.avatar}
                alt='Username'
                src=''
                />
                <h3>{username}</h3>
            </div>
            <img className={styled.image} src={imageUrl}/>
            <h4 className={styled.text}><strong>{username}: </strong>{caption}</h4>
           <Comments postId={postId}/>
        </div>
    )
}

export default Post
