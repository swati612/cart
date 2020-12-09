import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrF9SHGMIvgpgKpNyx208VP1z3UxcywvY",
  authDomain: "cart-fc60e.firebaseapp.com",
  databaseURL: "https://cart-fc60e.firebaseio.com",
  projectId: "cart-fc60e",
  storageBucket: "cart-fc60e.appspot.com",
  messagingSenderId: "56386375953",
  appId: "1:56386375953:web:5099832d4fd4f9a3a87cb0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

