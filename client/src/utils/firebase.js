
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "smartai-interview-agent.firebaseapp.com",
  projectId: "smartai-interview-agent",
  storageBucket: "smartai-interview-agent.firebasestorage.app",
  messagingSenderId: "388822124382",
  appId: "1:388822124382:web:3cdc6475419f3ac94cb1cf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}