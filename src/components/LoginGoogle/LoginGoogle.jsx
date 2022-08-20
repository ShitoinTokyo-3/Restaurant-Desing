import { LoginWithGoogleService } from "../../services/RegisterandLogin/LoginWithGoogle"
import { ButtonMediaLogin } from "../../styled-components/Buttons/Buttons.elements";
import {FcGoogle} from "react-icons/fc";


const LoginGoogle = ({ openModal, errorHandle }) => {
    const handleGoogleLogin = async () => {
        try {
            const user = await LoginWithGoogleService()
            openModal(false);
        } catch (error) {
            errorHandle(error.code);
        }
            
    }
  return (
    <>

        <ButtonMediaLogin onClick={handleGoogleLogin} style={{width:'211px'}} >
            <FcGoogle style={{fontSize:'25px', marginRight:'7px'}}/>
            Login with Google      
        </ButtonMediaLogin>
    </>
  )
}

export default LoginGoogle