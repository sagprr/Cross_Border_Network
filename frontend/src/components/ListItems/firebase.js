
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyAlEPy9THZr0fdT8PftQRWceqwXsW1nwDs",
    authDomain: "saviour-99f82.firebaseapp.com",
    projectId: "saviour-99f82",
    storageBucket: "saviour-99f82.appspot.com",
    messagingSenderId: "833185619646",
    appId: "1:833185619646:web:98927059250718b8c308ef"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database =getDatabase(app);
export { app, firestore, storage,database };