import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARXZwGFKPPCj5nzWurEl09ezsMY5lJI4o",
    authDomain: "disneyplus-clone-34de2.firebaseapp.com",
    projectId: "disneyplus-clone-34de2",
    storageBucket: "disneyplus-clone-34de2.appspot.com",
    messagingSenderId: "764723108481",
    appId: "1:764723108481:web:98e1b4536912b8531dcb80",
    measurementId: "G-BTTWZ7T7PR"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;