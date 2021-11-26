import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDm1M0GlmK6KMSGEK-9BKnTq1XG2XWb4V0",
    authDomain: "news-letter-app-a0f6e.firebaseapp.com",
    databaseURL: "https://news-letter-app-a0f6e-default-rtdb.firebaseio.com",
    projectId: "news-letter-app-a0f6e",
    storageBucket: "news-letter-app-a0f6e.appspot.com",
    messagingSenderId: "1023774077318",
    appId: "1:1023774077318:web:073cd6f01740a4ddbc7c07"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();