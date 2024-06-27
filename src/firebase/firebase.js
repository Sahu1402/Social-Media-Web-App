import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATVgRbzyR0z5_DPdOBGzYczRM17wY8GYw",
  authDomain: "insta-clone-16d11.firebaseapp.com",
  projectId: "insta-clone-16d11",
  storageBucket: "insta-clone-16d11.appspot.com",
  messagingSenderId: "316741638246",
  appId: "1:316741638246:web:59997ae3ba9e2420d3b5a7",
  measurementId: "G-N3RTEB728P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app , auth , firestore , storage };