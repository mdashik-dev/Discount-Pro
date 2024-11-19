// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFO4rwZKGRAENIoq1yYvNjYJiHBaNCsD0",
  authDomain: "discount-pro-web.firebaseapp.com",
  projectId: "discount-pro-web",
  storageBucket: "discount-pro-web.firebasestorage.app",
  messagingSenderId: "153400772938",
  appId: "1:153400772938:web:9669f73bf4de50510d99b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app