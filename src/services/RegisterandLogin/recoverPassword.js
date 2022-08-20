import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";

export const recoverPassword = ( email ) =>
    sendPasswordResetEmail( auth , email );
