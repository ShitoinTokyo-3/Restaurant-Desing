//Components
import FormUser from "../../../../components/FormUser/FormUser"
import LoginFacebook from "../../../../components/LoginFacebook/LoginFacebook"
import LoginGoogle from "../../../../components/LoginGoogle/LoginGoogle"
import Modal from "../../../../components/Modal/Modal"
//Styled Components
import { ContainerModal2ChildrenRow, ContainerModalChildren, ContainerTextModal } from "../../../../styled-components/Containers/Containers"
//Services
import { signIn } from "../../../../services/Register and Login/sigIn"

const HomeModalLogin = ({ open, functionUse, openModal }) => {
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

export default HomeModalLogin