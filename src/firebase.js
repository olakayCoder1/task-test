// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ZR_8SXOzWBQ1DrRpJkFHmoyUg129KB4",
  authDomain: "altshool-dev-data.firebaseapp.com",
  projectId: "altshool-dev-data",
  storageBucket: "altshool-dev-data.appspot.com",
  messagingSenderId: "528245811869",
  appId: "1:528245811869:web:aaf8b628aa0e517e840274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)