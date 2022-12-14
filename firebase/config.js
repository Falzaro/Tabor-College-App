import { initializeApp, getApp, getApps } from "firebase/app";
// Import firebase services
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBycI6e0o_mOOuvl3uy0IUeg1xDlGgQN-0",
    authDomain: "tabor-app-1b6a9.firebaseapp.com",
    projectId: "tabor-app-1b6a9",
    storageBucket: "tabor-app-1b6a9.appspot.com",
    messagingSenderId: "235746080233",
    appId: "1:235746080233:web:7890ad23ae3aca5cb28778",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Get Firestore database
const db = getFirestore(app);

export { db };
