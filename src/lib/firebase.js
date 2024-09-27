import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c5a0a.firebaseapp.com",
  projectId: "reactchat-c5a0a",
  storageBucket: "reactchat-c5a0a.appspot.com",
  messagingSenderId: "1081188897467",
  appId: "1:1081188897467:web:89128cc77189e9ce130f9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
