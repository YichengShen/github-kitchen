import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfj0HXgCSQGrZ4xIcdEevkFuvn79TIukg",
  authDomain: "github-kitchen.firebaseapp.com",
  projectId: "github-kitchen",
  storageBucket: "github-kitchen.appspot.com",
  messagingSenderId: "1064584564495",
  appId: "1:1064584564495:web:7563c6d63b116c7697787a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
