// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsyCz6k4co1Ks2E7DuT7M93z6aPsS3gvk",
  authDomain: "resumecraft-a783e.firebaseapp.com",
  projectId: "resumecraft-a783e",
  storageBucket: "resumecraft-a783e.appspot.com",
  messagingSenderId: "642522528566",
  appId: "1:642522528566:web:d9bdf355acdef30f005197",
  measurementId: "G-QWC18LR1L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export default app;