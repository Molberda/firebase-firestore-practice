// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCASTgX_v0ZkIECd8-off9n7x5Ap7PGs7w",
  authDomain: "firestore-practice-fa8e6.firebaseapp.com",
  projectId: "firestore-practice-fa8e6",
  storageBucket: "firestore-practice-fa8e6.appspot.com",
  messagingSenderId: "818491434386",
  appId: "1:818491434386:web:bcf6cf5045a470ab2d8d4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()