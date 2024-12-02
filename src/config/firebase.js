import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBT1gonOierRJ-Lz_ZT3clxgQreyuXBrk",
  authDomain: "ecoexplore-872a6.firebaseapp.com",
  projectId: "ecoexplore-872a6",
  storageBucket: "ecoexplore-872a6.firebasestorage.app",
  messagingSenderId: "220119568309",
  appId: "1:220119568309:web:13ac5d15b3f5fcb6f213fc",
  measurementId: "G-XM17MYQWH7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
