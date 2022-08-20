import Modal from "../../../../../../components/Modal/Modal"
import { ContainerModalChildrenRegister } from "../../../../../../styled-components/Containers/Containers"
import Form from "../../../HomeForm/components/Form/Form"

const ModalForm = ({ open, functionUse }) => {
  return (
    <Modal
        open={open}
        functionUse={functionUse}
    >
        <ContainerModalChildrenRegister>
            <h1>We help you Identify and Design Solutions</h1>
            <p>15 minutes connected with an expert in Gastronomic Marketing to create strategies.</p>
        </ContainerModalChildrenRegister>
        <Form isModal={true} setOpenModal={functionUse}/>
    </Modal>
  )
}

export default ModalForm