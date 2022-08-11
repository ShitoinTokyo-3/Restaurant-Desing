import { LoginWithFacebookService } from "../../services/Register and Login/LoginWithFacebook";
import { SiFacebook } from "react-icons/si";
import { ButtonMediaLogin } from "../../styled-components/Buttons/Buttons.elements";

const LoginFacebook = ({ openModal }) => {
    const handleFacebookLogin = async () => {
        try {
            const user = await LoginWithFacebookService()
            openModal(false);
        } catch (error) {
            console.log(error);
        }
            
    }
  return (
    <>
        <ButtonMediaLogin onClick={handleFacebookLogin}>
            <SiFacebook style={{fontSize:'25px', marginRight:'7px', color:'#3b5998'}}/>
            Login with Facebook
        </ButtonMediaLogin>
    </>
  )
}

export default LoginFacebook