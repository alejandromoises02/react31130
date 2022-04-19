import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoFhojvNFlToIrNbbQlDj691SogXoTplE",
  authDomain: "comision-31130.firebaseapp.com",
  projectId: "comision-31130",
  storageBucket: "comision-31130.appspot.com",
  messagingSenderId: "427106238337",
  appId: "1:427106238337:web:fb68007c49b45244187280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);