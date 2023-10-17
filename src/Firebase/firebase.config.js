// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0hwJC7EARw_taQkHwswYPp1tc_e4rf4",
  authDomain: "gadget-point-asmaul.firebaseapp.com",
  projectId: "gadget-point-asmaul",
  storageBucket: "gadget-point-asmaul.appspot.com",
  messagingSenderId: "570921586743",
  appId: "1:570921586743:web:4884cc65bc9a2c8b18efb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
