import * as firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAURuMwguym25jcUNo6UA1iGuK1YyEJ_XE",
    authDomain: "vinodestates-1c0de.firebaseapp.com",
    databaseURL: "https://vinodestates-1c0de.firebaseio.com",
    projectId: "vinodestates-1c0de",
    storageBucket: "vinodestates-1c0de.appspot.com",
    messagingSenderId: "92575890155",
    appId: "1:92575890155:web:4ff3ed348458e8ab021cae",
    measurementId: "G-0173HNG3ZX"
  };
  const app = firebase.initializeApp(firebaseConfig);

  export const db = app.firestore();