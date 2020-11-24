import firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyBFEoZNhTbhgHLXb4E_Gl1TVE3sKemjAjw",
    authDomain: "fir-react-example-bf65d.firebaseapp.com",
    databaseURL: "https://fir-react-example-bf65d.firebaseio.com",
    projectId: "fir-react-example-bf65d",
    storageBucket: "fir-react-example-bf65d.appspot.com",
    messagingSenderId: "956804219773",
    appId: "1:956804219773:web:43ced4400b1c3e33ed8214"
  };


  var fireDb = firebase.initializeApp(config);
   
export default fireDb.database().ref();