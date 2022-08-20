import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";

export const LoginWithFacebookService = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup( auth, facebookProvider );
}