// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAK1Szxmgz_ZZ_GR8n_aKLxEPTdKFQsnCU",
  authDomain: "katisa-da78d.firebaseapp.com",
  projectId: "katisa-da78d",
  storageBucket: "katisa-da78d.firebasestorage.app",
  messagingSenderId: "757263058910",
  appId: "1:757263058910:web:93c08c9807396d21fbbf4f",
  measurementId: "G-NT4SBTR199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
