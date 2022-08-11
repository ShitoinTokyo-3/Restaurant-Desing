import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

export const signOutService = () => signOut(auth);
