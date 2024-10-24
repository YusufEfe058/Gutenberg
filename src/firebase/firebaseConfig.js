import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAO9O5RLl8gu9gofWDx5p13agABm_yI3kg",
  authDomain: "login-panel-6c9a5.firebaseapp.com",
  projectId: "login-panel-6c9a5",
  storageBucket: "login-panel-6c9a5.appspot.com",
  messagingSenderId: "11798933306",
  appId: "1:11798933306:web:5650e81311ce7aa35cea03"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
