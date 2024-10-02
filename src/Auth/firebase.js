// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCA6uvxxa3ZUt3X4jajcuSG0-2h-J7XDxw",
  authDomain: "olx0-d6e59.firebaseapp.com",
  projectId: "olx0-d6e59",
  storageBucket: "olx0-d6e59.appspot.com",
  messagingSenderId: "127939226862",
  appId: "1:127939226862:web:560762ecbd4175dc53d7ff",
  measurementId: "G-W530LCL3B1"
}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const storage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth(app);

// Set persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Optional: you can sign in here if you want to handle it automatically
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// Auth state listener

// Export the auth object, provider, signInWithPopup, and signOut
export { auth, provider, signInWithPopup, signOut,onAuthStateChanged,db,storage };
