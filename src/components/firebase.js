// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3TZfg23oaIudV00Ji5Bpeejm5YprvwK8",
  authDomain: "movieplay-e32da.firebaseapp.com",
  projectId: "movieplay-e32da",
  storageBucket: "movieplay-e32da.firebasestorage.app",
  messagingSenderId: "142587110710",
  appId: "1:142587110710:web:67cf61372f4bacce60ff97",
  measurementId: "G-0KWFSP6914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
