import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXgUZuqmMT9BdJIfnvtXMINMC4iEX9fpg",
  authDomain: "slack-clone-c471a.firebaseapp.com",
  databaseURL: "https://slack-clone-c471a.firebaseio.com",
  projectId: "slack-clone-c471a",
  storageBucket: "slack-clone-c471a.appspot.com",
  messagingSenderId: "680284868775",
  appId: "1:680284868775:web:ea8bc980a2e9865ffdcb82",
  measurementId: "G-HHSTML4M7L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
