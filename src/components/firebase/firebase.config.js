// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// apiKey: "AIzaSyA0o5e8zjPAO-_6WnvrbTdy8C4y_h0oUwc",
// authDomain: "art-and-craft-store-83e2e.firebaseapp.com",
// projectId: "art-and-craft-store-83e2e",
// storageBucket: "art-and-craft-store-83e2e.firebasestorage.app",
// messagingSenderId: "949003415157",
// appId: "1:949003415157:web:75952b7c8d1926d18cd23c",

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
