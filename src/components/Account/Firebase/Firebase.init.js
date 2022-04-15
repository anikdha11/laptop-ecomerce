
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confique";


const intializeFirebaseApp= () =>{
    initializeApp(firebaseConfig)
}

export default intializeFirebaseApp;