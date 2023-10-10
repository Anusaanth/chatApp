import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBe3fNut4oknAz3_gIS_wtDeLjh8CCtZoA",
    authDomain: "chatapp-6ecb1.firebaseapp.com",
    projectId: "chatapp-6ecb1",
    storageBucket: "chatapp-6ecb1.appspot.com",
    messagingSenderId: "371766623049",
    appId: "1:371766623049:web:8beeddb1894e4542c4f898"
}).auth();