import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnrxfGMr5OEv_4Ou-r2Vis1F-pzU8-F5g",
    authDomain: "netflix-clone-5f0b5.firebaseapp.com",
    projectId: "netflix-clone-5f0b5",
    storageBucket: "netflix-clone-5f0b5.appspot.com",
    messagingSenderId: "178392674655",
    appId: "1:178392674655:web:98ee7b2fd1d6d0cfd986ea",
    measurementId: "G-Q5TNR38X15"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;