import { useState } from "react"
import { Navigate } from "react-router-dom";
import ModalRegister from "../../components/ModalRegister/ModalRegister";

const SignUp = () => {
    const [navi, setNavi] = useState(false);

    const setModalFunction = () =>{
        setNavi(true)
    }

    if(navi){
        return <Navigate to="/" />;
    }



  return (
    <>
        <ModalRegister
            open={true}
            functionUse={setModalFunction}
            openModal={()=>setNavi(true)}
        />
    </>
  )
}

export default SignUp