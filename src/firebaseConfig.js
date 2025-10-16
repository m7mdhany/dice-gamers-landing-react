// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkjE0RDu3gvfTSY7A0gNPnqEN3V0XyncQ",
  authDomain: "dice-gamers.firebaseapp.com",
  projectId: "dice-gamers",
  storageBucket: "dice-gamers.firebasestorage.app",
  messagingSenderId: "922534646121",
  appId: "1:922534646121:web:c174325da4bf67abad2df8",
  measurementId: "G-7YD6ELC1P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);