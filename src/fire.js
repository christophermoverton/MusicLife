import firebase from 'firebase';
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDc5HTc-vWLeoGKQL1HhBN3lGWyLuo8u4",
    authDomain: "musicofyourlife-865ab.firebaseapp.com",
    databaseURL: "https://musicofyourlife-865ab.firebaseio.com",
    projectId: "musicofyourlife-865ab",
    storageBucket: "musicofyourlife-865ab.appspot.com",
    messagingSenderId: "548646978680"
  };
  var fire =  firebase.initializeApp(config);
  export default fire;