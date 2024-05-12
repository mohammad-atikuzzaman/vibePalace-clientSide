// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI9BuYV0nU1MvOaYPArDYgLvQV0Hc9kEM",
  authDomain: "vibe-palace.firebaseapp.com",
  projectId: "vibe-palace",
  storageBucket: "vibe-palace.appspot.com",
  messagingSenderId: "227202910313",
  appId: "1:227202910313:web:02e02e0d1cf95184067af8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
