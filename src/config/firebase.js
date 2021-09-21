import  firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyBu0yUqdyL63lY672o5tWt_i_81Jv8Yvng",
  authDomain: "techkaro-c9730.firebaseapp.com",
  databaseURL: "https://techkaro-c9730.firebaseio.com",
  projectId: "techkaro-c9730",
  storageBucket: "techkaro-c9730.appspot.com",
  messagingSenderId: "257407748843",
  appId: "1:257407748843:web:c63f14a2695ef1500b4cae",
  measurementId: "G-LC1588VS44"
};
  firebase.initializeApp(firebaseConfig)
  export default firebase ;
 