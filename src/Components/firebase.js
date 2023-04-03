import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC03EX43_uoCqLWgm_ICWAIZ_YMytb6JV0",
    authDomain: "linkedin-mini.firebaseapp.com",
    projectId: "linkedin-mini",
    storageBucket: "linkedin-mini.appspot.com",
    messagingSenderId: "681060905698",
    appId: "1:681060905698:web:eb98e99f8d483d9b2ba4bb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};