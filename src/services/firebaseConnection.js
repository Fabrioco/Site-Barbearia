import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXMXIbBNoVyJ4QKWU4M5Y6dEeemlKjha4",
  authDomain: "barbeiro-b928f.firebaseapp.com",
  projectId: "barbeiro-b928f",
  storageBucket: "barbeiro-b928f.appspot.com",
  messagingSenderId: "286752950229",
  appId: "1:286752950229:web:795a4afe66e03108da5f5c",
  measurementId: "G-K4H9XYVYD9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };