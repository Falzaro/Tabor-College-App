import { initializeApp } from "firebase/app";
// Import firebase services
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKYIC7uYh2pD41ZZGPIifkFDiEd77hB1s",
    authDomain: "senior-design-i-prototype.firebaseapp.com",
    projectId: "senior-design-i-prototype",
    storageBucket: "senior-design-i-prototype.appspot.com",
    messagingSenderId: "962898045929",
    appId: "1:962898045929:web:166505eabb1532ec4ef978",
    measurementId: "G-BQ7QXSSZVT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Firestore database
const db = getFirestore(app);

// collection ref


export { db };