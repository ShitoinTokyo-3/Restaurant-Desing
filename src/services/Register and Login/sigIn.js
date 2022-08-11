import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

export const signIn = ( email, password ) =>
    signInWithEmailAndPassword( auth , email, password );
