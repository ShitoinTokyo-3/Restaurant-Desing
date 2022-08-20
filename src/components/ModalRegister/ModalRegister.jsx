//Components
import LoginFacebook from "../LoginFacebook/LoginFacebook"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import Modal from "../Modal/Modal"
import FormUserRegister from "../FormUserRegister/FormUserRegister"
//Styled Components
import { ContainerModal2ChildrenRow, ContainerModalChildrenRegister, ContainerTextModal } from "../../styled-components/Containers/Containers"
//Services
import { sigUp } from "../../services/RegisterandLogin/SignUp"

const ModalRegister = ({ open, functionUse, openModal }) => {

  return (
    <>
        <Modal
            open={open}
            functionUse={functionUse}
        >
            <ContainerModalChildrenRegister>
                <h1>You are already part of Restaurant Design Bar!</h1>
                <p>Create a user to access whenever you want and receive a <strong>10% discount on your order.</strong></p>

                <FormUserRegister
                    openModal={openModal} 
                    loginAndRegister={sigUp}
                    textButton={'Register'}
                >
                </FormUserRegister>
            </ContainerModalChildrenRegister>
            <ContainerModal2ChildrenRow>
                <LoginGoogle openModal={openModal}/>
                <LoginFacebook openModal={openModal}/>
            </ContainerModal2ChildrenRow>
        </Modal>
    </>
  )
}

export default ModalRegister