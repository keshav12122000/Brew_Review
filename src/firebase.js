// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIs7iPjo52aCdsIr7rn4r1ayPqOgZzTiY",
  authDomain: "signinsignup-3943c.firebaseapp.com",
  projectId: "signinsignup-3943c",
  storageBucket: "signinsignup-3943c.appspot.com",
  messagingSenderId: "370735816314",
  appId: "1:370735816314:web:3a456c95bd09fb79eea5c3",
  measurementId: "G-LNBG6FWD1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration, replace it with your project keys
// const firebaseConfig = {
//   apiKey: "apiKey",
//   authDomain: "authDomain",
//   projectId: "react-auth-tutorial-1234",
//   storageBucket: "storageBucket",
//   messagingSenderId: "messagingSenderId",
//   appId: "appId"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);