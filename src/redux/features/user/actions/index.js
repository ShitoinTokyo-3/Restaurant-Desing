import axios from "axios";
import { setUserRedux, setUserRedeuxBackend, setLoadingUser } from "..";
import URL_BACKEND from "../../../../utilities/BackEnd/ruta";

export const setUserGlobal = (currentUser) => {
    return (dispatch) => {
        if(currentUser){
            const currentUserDispatch = {
                email: currentUser.email,
                displayName : currentUser.displayName,
                photoURL : currentUser.photoURL,
                phoneNumber : currentUser.phoneNumber,

            }
            dispatch(setUserRedux(currentUserDispatch));
        }
    }
}

export const backEndToken = (currentUser) => {
    return async (dispatch)=>{
        if(currentUser){
            try {
                const res = await axios.post(`${URL_BACKEND}/auth/loginOrRegister`, {
                    email: currentUser.email,
                })
                const { token } = res.data;
                localStorage.setItem("token", token);
                dispatch(setUserRedeuxBackend(res.data.data)); 
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export const setLoadingUserAction = (loading) => {
    return (dispatch) => {
        dispatch(setLoadingUser(loading));
    }
}

