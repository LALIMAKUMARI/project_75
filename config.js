import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB_e-fDBdm6LYz_b606VmSpAzc8UM3yN_U",
  authDomain: "project71-a2344.firebaseapp.com",
  databaseURL: "https://project71-a2344-default-rtdb.firebaseio.com",
  projectId: "project71-a2344",
  storageBucket: "project71-a2344.appspot.com",
  messagingSenderId: "213988297877",
  appId: "1:213988297877:web:8433aba569fadb21729f9c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
