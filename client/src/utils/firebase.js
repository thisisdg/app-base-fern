import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBFEoZNhTbhgHLXb4E_Gl1TVE3sKemjAjw",
  authDomain: "fir-react-example-bf65d.firebaseapp.com",
  databaseURL: "https://fir-react-example-bf65d.firebaseio.com",
  projectId: "fir-react-example-bf65d",
  storageBucket: "fir-react-example-bf65d.appspot.com",
  messagingSenderId: "956804219773",
  appId: "1:956804219773:web:43ced4400b1c3e33ed8214"
});

export const firestore = app.database();
export const auth = app.auth();
export default app;