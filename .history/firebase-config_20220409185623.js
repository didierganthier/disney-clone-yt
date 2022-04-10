// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);