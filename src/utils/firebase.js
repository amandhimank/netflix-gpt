// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAl4Yel_h87TLhX2uL2ceY8MVmPgrLnA4",
  authDomain: "netflixgpt-3b87c.firebaseapp.com",
  projectId: "netflixgpt-3b87c",
  storageBucket: "netflixgpt-3b87c.firebasestorage.app",
  messagingSenderId: "783411361661",
  appId: "1:783411361661:web:44a2002d5aeb137b913e14",
  measurementId: "G-K4SRRKWN5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);