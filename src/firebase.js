import firebase from 'firebase'

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9pVGkspbXS9jLqu5WjSQzW1M0S4nTnVg",
    authDomain: "instagram-clone-4aef5.firebaseapp.com",
    databaseURL: "https://instagram-clone-4aef5.firebaseio.com",
    projectId: "instagram-clone-4aef5",
    storageBucket: "instagram-clone-4aef5.appspot.com",
    messagingSenderId: "886023580591",
    appId: "1:886023580591:web:f54a826fca8d7ff5895d5a",
    measurementId: "G-3LLMYW8LF3"
  })

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export { db, auth, storage }
