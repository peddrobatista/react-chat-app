import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEnXbn1Oi4Yain493Hyf8n4hcznEpQgtY",
    authDomain: "chat-app-61ebd.firebaseapp.com",
    projectId: "chat-app-61ebd",
    storageBucket: "chat-app-61ebd.appspot.com",
    messagingSenderId: "642327544238",
    appId: "1:642327544238:web:035f7d7f309be3bd4d883f"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };