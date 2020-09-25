import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import styled from './Comments.module.css'
import firebase from 'firebase'

function Comments({postId, user}) {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe
        if(postId) {
            unsubscribe = db
            .collection('posts')
            .doc(postId)
            .collection('comments')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()))
            })
        }
        return () => {
            unsubscribe()
        }
    }, [postId])
    
    const postComment = (e) => {
        e.preventDefault()

        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('')
    }
    
    return (
        <div>
            <div className={styled.comments}>
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>

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

export default Comments
