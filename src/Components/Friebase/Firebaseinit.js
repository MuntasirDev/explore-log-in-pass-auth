// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3OjyNYtip2erq7KERJ6RiFNx3opgClU4",
  authDomain: "explore-log-in-pass-auth.firebaseapp.com",
  projectId: "explore-log-in-pass-auth",
  storageBucket: "explore-log-in-pass-auth.firebasestorage.app",
  messagingSenderId: "656249728422",
  appId: "1:656249728422:web:66d5f623bbe85ca1ef7367"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);