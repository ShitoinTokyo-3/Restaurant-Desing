import { useDispatch, useSelector } from "react-redux";
import { setLoadingUserAction } from "../../redux/features/user/actions";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


const ProtectedRoute = ({children}) => {

    const dispatch = useDispatch();
    // const user = useSelector(state => state.user.userInfo);
    const userInfoBackend = useSelector(state => state.user.userInfoBackend);
    const loading = useSelector(state => state.user.loadingUser);

    
    // if(!loading) return (<h1>Loading...</h1>)


    // if(!user.email) return ( <Navigate to="/sigup" /> );

    if(userInfoBackend.role !== "admin") return <Navigate to="/"/>;
    
    
    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute