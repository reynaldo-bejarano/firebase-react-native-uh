import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"

export const firebaseConfig = {
  apiKey: "AIzaSyAG5xT2zu30lgE0ZY5tyKMJ87kvAB2BIr4",
  authDomain: "reactnative-69382.firebaseapp.com",
  projectId: "reactnative-69382",
  storageBucket: "reactnative-69382.appspot.com",
  messagingSenderId: "538466149804",
  appId: "1:538466149804:web:4c0d2da2ff877f92084609"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

