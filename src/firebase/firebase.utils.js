import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9oACF9R-Zd_ozavnhJwUQBG5HDOnOp5g",
    authDomain: "react-ecom-db.firebaseapp.com",
    databaseURL: "https://react-ecom-db.firebaseio.com",
    projectId: "react-ecom-db",
    storageBucket: "",
    messagingSenderId: "255402271702",
    appId: "1:255402271702:web:0d2c5a05c1db1f19"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;