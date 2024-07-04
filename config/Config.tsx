// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUF4EVNT6sPc_YJ6IYpd2a2NXO0pG6dLA",
  authDomain: "prueba-1-1d02c.firebaseapp.com",
  databaseURL: "https://prueba-1-1d02c-default-rtdb.firebaseio.com",
  projectId: "prueba-1-1d02c",
  storageBucket: "prueba-1-1d02c.appspot.com",
  messagingSenderId: "415366500656",
  appId: "1:415366500656:web:5fcb42af36c0c041b6b8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);