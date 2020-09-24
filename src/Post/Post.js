import React from 'react'
import styled from './Post.module.css'
import Avatar from '@material-ui/core/Avatar'

function Post() {
    return (
        <div className={styled.post}>
            <div className={styled.header}>
                <Avatar
                className={styled.avatar}
                alt='Username'
                src='/static/images/avatar/1.jpg'
                />
                <h3>Username</h3>
            </div>

            <img className={styled.image} src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>


            <h4 className={styled.text}><strong>Username: </strong>caption</h4>
        </div>
    )
}

export default Post
