import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBUoF436yoEgRmyWki-OHK4k4vd4cKD1o",
  authDomain: "react-native-a080a.firebaseapp.com",
  projectId: "react-native-a080a",
  storageBucket: "react-native-a080a.firebasestorage.app",
  messagingSenderId: "99244677953",
  appId: "1:99244677953:web:537a33d79a68e3de421fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};