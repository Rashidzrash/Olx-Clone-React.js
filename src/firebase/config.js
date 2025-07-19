import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXodscwlxrc0UXrHNknmCYFRMiqLPAxj4",
    authDomain: "olx-demo-d201d.firebaseapp.com",
    projectId: "olx-demo-d201d",
    storageBucket: "olx-demo-d201d.firebasestorage.app",
    messagingSenderId: "505674701860",
    appId: "1:505674701860:web:00e53b9cbe15f157144cb1",
    measurementId: "G-080BLJYLHD"
  };

 export default firebase.initializeApp(firebaseConfig)
