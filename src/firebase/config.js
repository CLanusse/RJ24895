// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCID5gZ99eFBpyBnVt8FTcGbqadyNQujkM",
  authDomain: "rj-24895.firebaseapp.com",
  projectId: "rj-24895",
  storageBucket: "rj-24895.appspot.com",
  messagingSenderId: "539515778310",
  appId: "1:539515778310:web:f156ec203db05976159a87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)