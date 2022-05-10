import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMqeQz4e_pHhrqbFI1U4c1uLir1UU61YE",
  authDomain: "formik-form-e96bb.firebaseapp.com",
  projectId: "formik-form-e96bb",
  storageBucket: "formik-form-e96bb.appspot.com",
  messagingSenderId: "832419389866",
  appId: "1:832419389866:web:82f7f7d96c14de279e0bd3",
  measurementId: "G-QFDK8JEFEL"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);

const analytics = getAnalytics(app);