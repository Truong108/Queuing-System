// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH3ZbuteZC-nzvwAqaEWX4_PEdGSke6lc",
  authDomain: "queuing-system-42564.firebaseapp.com",
  projectId: "queuing-system-42564",
  storageBucket: "queuing-system-42564.appspot.com",
  messagingSenderId: "430396017149",
  appId: "1:430396017149:web:635fefb187a9d090d27194",
  measurementId: "G-3XZRX242KJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const api = getFirestore(app);
export default api;

