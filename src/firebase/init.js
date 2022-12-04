// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxuZLfRcvW6jpeaBCqKM4MSVRs2-tb9y4",
  authDomain: "clone-7ad23.firebaseapp.com",
  projectId: "clone-7ad23",
  storageBucket: "clone-7ad23.appspot.com",
  messagingSenderId: "338134547110",
  appId: "1:338134547110:web:d82e457f5053674e925267"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore()
const provider = new GoogleAuthProvider();

export { auth, db, provider }