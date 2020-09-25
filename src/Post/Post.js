import React, { useEffect, useState } from 'react'
import styled from './Post.module.css'
import Avatar from '@material-ui/core/Avatar'
import { db } from '../firebase'


function Post({postId, username, caption, imageUrl}) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe
        if(postId) {
            unsubscribe = db
            .collection('posts')
            .doc(postId)
            .collection('comments')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()))
            })
        }
        return () => {
            unsubscribe()
        }
    }, [postId])

    const postComment = (e) => {

    }

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
            <form className={styled.commentBox}>
                <input
                className={styled.input}
                type='text'
                placeholder='Add a comment...'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                <button
                className={styled.button}
                disabled={!comment}
                type='submit'
                onClick={postComment}
                >
                    Post
                </button>
            </form>
        </div>
    )
}

export default Post
