import firebase from '@firebase/app'
import 'firebase/storage'
// var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

var config = {
    apiKey: "AIzaSyCnKHP42pOqDkrz5IlAW513pEvPZcQCVb8",
    authDomain: "photoapp-859b5.firebaseapp.com",
    databaseURL: "https://photoapp-859b5.firebaseio.com",
    projectId: "photoapp-859b5",
    storageBucket: "photoapp-859b5.appspot.com",
    messagingSenderId: "429622908808"
  };
 export const FirebaseApp =  firebase.initializeApp(config);