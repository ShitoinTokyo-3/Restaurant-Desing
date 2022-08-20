import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";

export const LoginWithGoogleService = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup( auth, googleProvider );
}