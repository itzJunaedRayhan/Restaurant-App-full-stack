import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB7Kpz2vYiWqfn-30Eus7UdywPTMGLigDc",
    authDomain: "web-genesis-restaurant-app.firebaseapp.com",
    databaseURL: "https://web-genesis-restaurant-app-default-rtdb.firebaseio.com",
    projectId: "web-genesis-restaurant-app",
    storageBucket: "web-genesis-restaurant-app.appspot.com",
    messagingSenderId: "929588754985",
    appId: "1:929588754985:web:d8cb75edf73482741dba38"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
