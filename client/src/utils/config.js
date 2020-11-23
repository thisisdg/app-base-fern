import firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyCH3rW56b5zW2_SDoZokIWRxGp2-S38QzM",
    authDomain: "newobject-515b9.firebaseapp.com",
    databaseURL: "https://newobject-515b9.firebaseio.com",
    projectId: "newobject-515b9",
    storageBucket: "newobject-515b9.appspot.com",
    messagingSenderId: "907446914531",
    appId: "1:907446914531:web:6842cdbed22a890ca6e4d6",
    measurementId: "G-YBW93ZR3K1"
}


var fireDb = firebase.initializeApp(config);
export default fireDb;
