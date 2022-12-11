// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATNTfsNd-D-VRrPzcjcvaGABMz8ug5hKE",
  authDomain: "clone-dde0b.firebaseapp.com",
  projectId: "clone-dde0b",
  storageBucket: "clone-dde0b.appspot.com",
  messagingSenderId: "53245204144",
  appId: "1:53245204144:web:35b1ca37242f4b4acc4d75"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore()
const provider = new GoogleAuthProvider();

export { auth, db, provider }