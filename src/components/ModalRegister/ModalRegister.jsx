import { useTranslation } from "react-i18next";
//Components
import LoginFacebook from "../LoginFacebook/LoginFacebook"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import Modal from "../Modal/Modal"
import FormUserRegister from "../FormUserRegister/FormUserRegister"
//Styled Components
import { ContainerModal2ChildrenRow, ContainerModalChildrenRegister } from "../../styled-components/Containers/Containers"
//Services
import { sigUp } from "../../services/RegisterandLogin/signUp"

const ModalRegister = ({ open, functionUse, openModal }) => {

    const { t } = useTranslation(['modal']);

  return (
    <>
        <Modal
            open={open}
            functionUse={functionUse}
            back={true}
        >
            <ContainerModalChildrenRegister>
                <h1>{t('sigup.title')}</h1>
                <p>{t('sigup.text1')}<strong>{t('sigup.text2')}</strong></p>

                <FormUserRegister
                    openModal={openModal} 
                    loginAndRegister={sigUp}
                    textButton={t('sigup.textButton')}
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