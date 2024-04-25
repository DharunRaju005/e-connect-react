// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAldUPs2NrC-5BAtMmMtZ4kuOryUpRlnxg",
  authDomain: "e-connect-ebcc6.firebaseapp.com",
  projectId: "e-connect-ebcc6",
  storageBucket: "e-connect-ebcc6.appspot.com",
  messagingSenderId: "1023262302338",
  appId: "1:1023262302338:web:7bd2abba45de7e8816149b",
  measurementId: "G-D7N5RV2M9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const storage=getStorage(app);

export { auth,provider,storage};
export default db;
