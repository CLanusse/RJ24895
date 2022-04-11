// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJkVy_6wlmdDZA0CnP0DskFHK_KBFrMow",
  authDomain: "rj-26240.firebaseapp.com",
  projectId: "rj-26240",
  storageBucket: "rj-26240.appspot.com",
  messagingSenderId: "706594517826",
  appId: "1:706594517826:web:015c0c46edeac25cce4edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)