// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuBAKutGupAWhns4-Dhy3Ika8uxrLDah4",
  authDomain: "contactmanagment-e0be7.firebaseapp.com",
  projectId: "contactmanagment-e0be7",
  storageBucket: "contactmanagment-e0be7.appspot.com",
  messagingSenderId: "372073730262",
  appId: "1:372073730262:web:3c1f66c09d933338bc3977",
  measurementId: "G-16QJ4FVPJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


