//Components
import FormUser from "../FormUser/FormUser"
import LoginFacebook from "../LoginFacebook/LoginFacebook"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import Modal from "../Modal/Modal"
//Styled Components
import { ContainerModal2ChildrenRow, ContainerModalChildren, ContainerTextModal } from "../../styled-components/Containers/Containers"
//Services
import { signIn } from "../../services/Register and Login/sigIn"

const ModalLogin = ({ open, functionUse, openModal }) => {
  return (
    <Modal
        open={open}
        functionUse={functionUse}
    >
        <ContainerModalChildren>
            <h1>Login</h1>
            <ContainerModal2ChildrenRow>
                <LoginGoogle openModal={openModal}/>
                <LoginFacebook openModal={openModal}/>
            </ContainerModal2ChildrenRow>
            <ContainerTextModal>or use your email to login:</ContainerTextModal>
            <FormUser
              openModal={openModal} 
              loginAndRegister={signIn}
              textButton={'Login'}
              forgotPassword={true}
            >
            </FormUser>
        </ContainerModalChildren>
    </Modal>
  )
}

export default ModalLogin