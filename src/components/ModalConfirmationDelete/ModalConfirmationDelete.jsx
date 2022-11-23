import { ButtonLogin } from "../../styled-components/Buttons/Buttons.elements"
import { ContainerFlexBottom } from "../../styled-components/Containers/Containers"
import Modal from "../Modal/Modal"
import { TextContainer } from "../ModalCheckEmail/styled-component/TextContainer"

const ModalConfirmationDelete = ({ open, functionUse, entity , functionToDelete }) => {
  return (
    <Modal
        open={open}
        functionUse={functionUse}
    >
    <TextContainer>
        <h3>Are you sure you want to remove this {entity}?</h3>
        <p>Once you remove this {entity}, it will be permanently deleted.</p>

        <ContainerFlexBottom>
            <ButtonLogin 
                onClick={functionToDelete}
            >Delete</ButtonLogin>
            <ButtonLogin 
                onClick={functionUse}
            >Cancel</ButtonLogin> 
        </ContainerFlexBottom>
    </TextContainer>

    </Modal>
  )
}

export default ModalConfirmationDelete