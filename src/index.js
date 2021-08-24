import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/app.scss";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBqizTbvFe0rfkk-kp2Fh7Wtqcy-kqL1x8",
  authDomain: "industriasgrindoil-6aaca.firebaseapp.com",
  projectId: "industriasgrindoil-6aaca",
  storageBucket: "industriasgrindoil-6aaca.appspot.com",
  messagingSenderId: "1069134717283",
  appId: "1:1069134717283:web:d2ade167f96cd17ea97356",
  measurementId: "G-4J4S4KGZJB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
