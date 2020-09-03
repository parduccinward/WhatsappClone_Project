import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDV4MadkxVWepGiLuOdMDolvh_ugHPnkdI",
  authDomain: "whatsapp-clone-1bc29.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1bc29.firebaseio.com",
  projectId: "whatsapp-clone-1bc29",
  storageBucket: "whatsapp-clone-1bc29.appspot.com",
  messagingSenderId: "953818671821",
  appId: "1:953818671821:web:1413e7e136253a0b1ad784",
  measurementId: "G-RWEYCNPC4T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
