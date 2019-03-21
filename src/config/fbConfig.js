import firebase, { auth } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDGI0d9e0rfgf0r-USlvoLfaQMXubVAU_s",
  authDomain: "simple-trello-1291.firebaseapp.com",
  databaseURL: "https://simple-trello-1291.firebaseio.com",
  projectId: "simple-trello-1291",
  storageBucket: "simple-trello-1291.appspot.com",
  messagingSenderId: "1094779087119"
};
firebase.initializeApp(config);
firebase.firestore().settings({});
export default firebase;
