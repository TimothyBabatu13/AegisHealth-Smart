
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: 'AIzaSyCPYt--x_mFi0P-EWP5-cQBaVRZdVLve-4',
  authDomain: "aegis-health-smart.firebaseapp.com",
  projectId: "aegis-health-smart",
  storageBucket: "aegis-health-smart.appspot.com",
  messagingSenderId: "543459631924",
  appId: "1:543459631924:web:dc5500d42d0bc6d46f3b61",
  measurementId: "G-5G5V3THPCV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);