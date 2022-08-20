import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

export const sigUp = ( email, password ) =>
    createUserWithEmailAndPassword( auth , email, password );