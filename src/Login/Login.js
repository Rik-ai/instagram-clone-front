import React, { useState } from 'react';
import { Button, Input, makeStyles, Modal } from '@material-ui/core'
import styled from './Login.module.css'
import { auth } from './firebase'



function getModalStyle() {
    const top = 50
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }))
  

function Login(props) {
 
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signUp =(e) => {

  }

    return (
        <div>
      <Modal
        open={props.open}
        onClose={() => props.setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className={styled.signup}>
            <center>
              <img
                className={styled.headerImage}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp6HPVhiV-Y8A3dplMSqyJz32F2B-QMKn09A&usqp=CAU'
                alt=''
              />
            </center>
            <Input
              placeholder='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder='email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='password'
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit' onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
        </div>
    )
}

export default Login
