import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "dotenv/config";
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "creucreuser.firebaseapp.com",
  projectId: "creucreuser",
  storageBucket: "creucreuser.appspot.com",
  messagingSenderId: "275165073369",
  appId: "1:275165073369:web:56d9bc28fa88b9c55ad3c8",
  measurementId: "G-EDQ1MBTD81"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {
  auth as a,
  db as d
};
