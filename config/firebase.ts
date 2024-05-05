// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8VsmOhefW5V-15Z2DQTSpJPZNHyBITSY",
  authDomain: "blog-comments-16f5e.firebaseapp.com",
  projectId: "blog-comments-16f5e",
  storageBucket: "blog-comments-16f5e.appspot.com",
  messagingSenderId: "779048994734",
  appId: "1:779048994734:web:88246617f199d7dec56a3f",
  measurementId: "G-4HJGTZDD3B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
