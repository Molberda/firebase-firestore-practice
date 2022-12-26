// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI5-kFiubDJBEReDrRebEz6xk5vjXGOmU",
  authDomain: "fir-practice-fb16e.firebaseapp.com",
  projectId: "fir-practice-fb16e",
  storageBucket: "fir-practice-fb16e.appspot.com",
  messagingSenderId: "563602174772",
  appId: "1:563602174772:web:16e96cbdcdec370a872b61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()