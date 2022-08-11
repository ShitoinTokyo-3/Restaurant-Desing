import { setUserRedux, setLoadingUser } from "..";

export const setUserGlobal = (user) => {
    return (dispatch) => {
        if(user){
            const currentUser = {
                email: user.email,
                displayName : user.displayName,
                photoURL : user.photoURL,
                phoneNumber : user.phoneNumber,
            }
            dispatch(setUserRedux(currentUser));
        }
    }
}

export const setLoadingUserAction = (loading) => {
    return (dispatch) => {
        dispatch(setLoadingUser(loading));
    }
}

