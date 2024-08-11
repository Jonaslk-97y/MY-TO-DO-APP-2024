import React from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDpBFVXi95zE26MvU5CH3qe1Kw0Gz9g0w",
  authDomain: "lots-app-17810.firebaseapp.com",
  projectId: "lots-app-17810",
  storageBucket: "lots-app-17810.appspot.com",
  messagingSenderId: "124825222072",
  appId: "1:124825222072:web:6e2dcf79e97ba3f79f2d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const auth = getAuth(app);
 const db = getFirestore(app);

export { auth, db };