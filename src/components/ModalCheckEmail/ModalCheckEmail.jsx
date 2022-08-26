import { useTranslation } from "react-i18next";
import { ButtonBannerToForm } from "../../styled-components/Banner/banner"
import Modal from "../Modal/Modal"
import { TextContainer } from "./styled-component/TextContainer"

const ModalCheckEmail = ({open, functionUse}) => {
  
  const { t } = useTranslation(['home']);
  
  return (
    <Modal
      open={open}
      functionUse={functionUse}
    >
      <TextContainer>
        <h3>{t('checkModal.title')}</h3>
        <p>{t('checkModal.text1')}</p>
        <p><span>{t('checkModal.text2')}</span></p>
        <ButtonBannerToForm style={{margin:'0',marginBottom:'1.3rem'}} onClick={functionUse}>
          {t('checkModal.button')}
        </ButtonBannerToForm>
      </TextContainer>

    </Modal>
  )
}

export default ModalCheckEmail