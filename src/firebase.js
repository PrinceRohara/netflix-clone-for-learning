import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkBAGCPy_68S1NJ4-uhK8Yeiu1tQeNKkE",
  authDomain: "netflix-clone-57e63.firebaseapp.com",
  projectId: "netflix-clone-57e63",
  storageBucket: "netflix-clone-57e63.appspot.com",
  messagingSenderId: "864348709603",
  appId: "1:864348709603:web:f33ca2b408db1b25d09bd6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();

export { auth };
export default db;
