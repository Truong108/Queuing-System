// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const api = getAnalytics(app);
export default api;
// Import the functions you need from the SDKs you need

const auth: Auth = getAuth(); // Sử dụng Auth kiểu Auth

export const signIn = async (tendn: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, tendn, password);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message as string }; // Chuyển error sang kiểu string
  }
};
