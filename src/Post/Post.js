import React from 'react'
import styled from './Post.module.css'
import Avatar from '@material-ui/core/Avatar'

function Post(props) {
    return (
        <div className={styled.post}>
            <div className={styled.header}>
                <Avatar
                className={styled.avatar}
                alt='Username'
                src=''
                />
                <h3>{props.username}</h3>
            </div>
            <img className={styled.image} src={props.imageUrl}/>
            <h4 className={styled.text}><strong>{props.username}: </strong>{props.caption}</h4>
        </div>
    )
}

export default Post
