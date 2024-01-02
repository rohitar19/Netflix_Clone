import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGAtTxuPLUF6H31dAeONBJUAc6ztq-nk0",
  authDomain: "netflix-clone-b6917.firebaseapp.com",
  projectId: "netflix-clone-b6917",
  storageBucket: "netflix-clone-b6917.appspot.com",
  messagingSenderId: "1009657493144",
  appId: "1:1009657493144:web:824660731a7e92d7d5c2ed",
  measurementId: "G-1Q601PERL9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
