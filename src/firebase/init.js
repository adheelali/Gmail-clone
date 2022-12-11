// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW--VMMdPKRAVinPa0M4umx8ZZl3xs-N8",
  authDomain: "clone-cd805.firebaseapp.com",
  projectId: "clone-cd805",
  storageBucket: "clone-cd805.appspot.com",
  messagingSenderId: "326248025570",
  appId: "1:326248025570:web:e8915f3aab5777ede67dbb"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore()
const provider = new GoogleAuthProvider();

export { auth, db, provider }