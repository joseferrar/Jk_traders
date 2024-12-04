// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDikK7UOwYgIYyHB3Tmvtlry7c7ZItGmY",
    authDomain: "jkstraders-007.firebaseapp.com",
    projectId: "jkstraders-007",
    storageBucket: "jkstraders-007.firebasestorage.app",
    messagingSenderId: "166942443965",
    appId: "1:166942443965:web:b60b208ffe91146fa12ad4",
    measurementId: "G-G1S7179F42"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
