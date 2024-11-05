// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA10mS0l311Ta5I_YVp69X4pHsNDDtQ3ak",
  authDomain: "money-tracker-a7743.firebaseapp.com",
  projectId: "money-tracker-a7743",
  storageBucket: "money-tracker-a7743.firebasestorage.app",
  messagingSenderId: "190500604013",
  appId: "1:190500604013:web:26c7d8bc5e5418e7c4d764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
