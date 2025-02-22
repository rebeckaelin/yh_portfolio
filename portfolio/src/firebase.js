import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGsPskH0omHchiN5r3NKq7ypLLe8Hvp_s",
  authDomain: "heartcounter-15496.firebaseapp.com",
  projectId: "heartcounter-15496",
  storageBucket: "heartcounter-15496.firebasestorage.app",
  messagingSenderId: "868357094083",
  appId: "1:868357094083:web:83c011288ca8154aaf4076",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, setDoc, updateDoc };
