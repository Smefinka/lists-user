// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOUXC49_g_PxUdb8YObFxURvWooWcg11g",
  authDomain: "burger-43f0c.firebaseapp.com",
  projectId: "burger-43f0c",
  storageBucket: "burger-43f0c.appspot.com",
  messagingSenderId: "292290034150",
  appId: "1:292290034150:web:70f25796829c1d0097be27",
  measurementId: "G-69P55CR0L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const DB_URL = 'https://burger-43f0c-default-rtdb.europe-west1.firebasedatabase.app/';