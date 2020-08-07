import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAURymT3b0EWHeDurAOsRgCKlgQpKJOvs4",
    authDomain: "firegram-54e58.firebaseapp.com",
    databaseURL: "https://firegram-54e58.firebaseio.com",
    projectId: "firegram-54e58",
    storageBucket: "firegram-54e58.appspot.com",
    messagingSenderId: "297166282912",
    appId: "1:297166282912:web:0ad92ae9e89ea4cf2ba9c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };