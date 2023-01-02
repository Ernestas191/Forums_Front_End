import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC9fOuWkx09Fk7praTqrCgQQWhGPLjE7fo",
  authDomain: "forums-29f9c.firebaseapp.com",
  projectId: "forums-29f9c",
  storageBucket: "forums-29f9c.appspot.com",
  messagingSenderId: "792144379565",
  appId: "1:792144379565:web:732d7c1152b73479061024",
  measurementId: "G-RFB8GZ071L"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = getAuth(app);

 export { app, auth };