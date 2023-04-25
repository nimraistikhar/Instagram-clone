// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyC59n1FlGSH3RPWO9MH8FTLUfO3KgZEGLw",
//     authDomain: "instagram-clone-fa2b8.firebaseapp.com",
//     projectId: "instagram-clone-fa2b8",
//     storageBucket: "instagram-clone-fa2b8.appspot.com",
//     messagingSenderId: "99935849333",
//     appId: "1:99935849333:web:b961696ca0eb3081f5e13c",
//     measurementId: "G-Q9WDBZQYEG"
// })

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC59n1FlGSH3RPWO9MH8FTLUfO3KgZEGLw",
    authDomain: "instagram-clone-fa2b8.firebaseapp.com",
    projectId: "instagram-clone-fa2b8",
    storageBucket: "instagram-clone-fa2b8.appspot.com",
    messagingSenderId: "99935849333",
    appId: "1:99935849333:web:b961696ca0eb3081f5e13c",
    measurementId: "G-Q9WDBZQYEG"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };