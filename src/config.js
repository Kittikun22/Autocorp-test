import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDm-BLlXVxai0ELUg2v1gWrOQL4a3HmAhM",
  authDomain: "autocorp-test.firebaseapp.com",
  projectId: "autocorp-test",
  storageBucket: "autocorp-test.appspot.com",
  messagingSenderId: "990525360550",
  appId: "1:990525360550:web:df105ae3d47198a4382767",
  measurementId: "G-TG4PZHQGFD"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
