// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDQOo_gbF1E8QDynNaAM5zDuKho4xscmLo",
  authDomain: "funkoshop-b7276.firebaseapp.com",
  projectId: "funkoshop-b7276",
  storageBucket: "funkoshop-b7276.appspot.com",
  messagingSenderId: "36466910390",
  appId: "1:36466910390:web:91a6687c65b70642de3217",
  measurementId: "G-YSP8XBEQPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
