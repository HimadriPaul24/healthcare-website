import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitialization = () => {
    return initializeApp(firebaseConfig);

};

export default firebaseInitialization;