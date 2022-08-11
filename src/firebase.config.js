// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzQv_YxaQ9TEtorNMue2kg_Jkxt3dVwXs",
  authDomain: "restaurant-design-317b8.firebaseapp.com",
  projectId: "restaurant-design-317b8",
  storageBucket: "restaurant-design-317b8.appspot.com",
  messagingSenderId: "600291672156",
  appId: "1:600291672156:web:e9346e0b61f7eab0936699",
  measurementId: "G-CD3F4PMB21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);