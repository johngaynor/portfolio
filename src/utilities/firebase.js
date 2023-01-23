import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx5jN4t5faQ2p5Z_NQoX21I6oRB5tul8I",
  authDomain: "gaynor-portfolio.firebaseapp.com",
  projectId: "gaynor-portfolio",
  storageBucket: "gaynor-portfolio.appspot.com",
  messagingSenderId: "219749192723",
  appId: "1:219749192723:web:0a6a20e7a00497c5055be6",
  measurementId: "G-3CS6TP6LWH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
