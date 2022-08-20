import { ButtonBannerToForm } from "../../styled-components/Banner/banner"
import Modal from "../Modal/Modal"
import { TextContainer } from "./styled-component/TextContainer"

const ModalCheckEmail = ({open, functionUse}) => {
  return (
    <Modal
      open={open}
      functionUse={functionUse}
    >
      <TextContainer>
        <h3>Check your email!</h3>
        <p>We have sent important information to schedule your consultation with an expert.</p>
        <ButtonBannerToForm style={{margin:'0'}} onClick={functionUse} >Ok</ButtonBannerToForm>
      </TextContainer>

    </Modal>
  )
}

export default ModalCheckEmail