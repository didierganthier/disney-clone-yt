import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcT82NyiXpqODFMnVjGzWf_TRWhKgNdwg",
  authDomain: "disney-clone-650cc.firebaseapp.com",
  projectId: "disney-clone-650cc",
  storageBucket: "disney-clone-650cc.appspot.com",
  messagingSenderId: "413608018810",
  appId: "1:413608018810:web:acb77025239dc1b3a4ccc3",
  measurementId: "G-5C0X10PNFQ"
};

// Initialize Firebase
const app = !firebase.app.length
? initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();

export { db };