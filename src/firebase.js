import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB9YKwIHZ2c85281O7m1Ai6b6J-6On52OY",
  authDomain: "react-hooks-aaf49.firebaseapp.com",
  databaseURL: "https://react-hooks-aaf49.firebaseio.com",
  projectId: "react-hooks-aaf49",
  storageBucket: "react-hooks-aaf49.appspot.com",
  messagingSenderId: "896651019085",
  appId: "1:896651019085:web:33ee6cf95f456f247b2d04",
  measurementId: "G-R7SVX0L3PG",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
