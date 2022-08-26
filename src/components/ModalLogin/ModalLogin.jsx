//Node Modules
import { useState } from "react"
import { useTranslation } from "react-i18next";
//Components
import FormUser from "../FormUser/FormUser"
import LoginFacebook from "../LoginFacebook/LoginFacebook"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import Modal from "../Modal/Modal"
import ErrorInput from "../ErrorInput/ErrorInput"
//Styled Components
import { ContainerModal2ChildrenRow, ContainerModalChildren, ContainerTextModal } from "../../styled-components/Containers/Containers"
//Services
import { signIn } from "../../services/RegisterandLogin/sigIn"
import { TextLink } from "./styled-components/Text.element"
import { NavLink } from "react-router-dom"


const ModalLogin = ({ open, functionUse, openModal }) => {

  const { t } = useTranslation(['modal']);

  const errorMedia = {
    'auth/account-exists-with-different-credential': 'This account is already registered with a different provider. Sign in using that provider.',
  }

  const [errorLoginMedia, setErrorLoginMedia] = useState({
    error: false,
    errorMessage: ''
  })
  const handleMedaiLoginError = (code) => {
    setErrorLoginMedia({
      error: true,
      errorMessage: errorMedia[code]? errorMedia[code] : code
    })
  }


  return (
    <>
      <Modal
          open={open}
          functionUse={functionUse}
      >
          <ContainerModalChildren>
              <h1>{t('login.title')}</h1>
              <ContainerModal2ChildrenRow>
                  <LoginGoogle openModal={openModal} errorHandle={handleMedaiLoginError}/>
                  <LoginFacebook openModal={openModal} errorHandle={handleMedaiLoginError} />
              </ContainerModal2ChildrenRow>
              {errorLoginMedia.error && <ErrorInput>{errorLoginMedia.errorMessage}</ErrorInput>}
              <ContainerTextModal>{t('login.orUse')}</ContainerTextModal>
              <FormUser
                openModal={openModal} 
                loginAndRegister={signIn}
                textButton={t('login.textButton')}
                forgotPassword={true}
              />
              <TextLink>
                <NavLink to={'/signup'} style={{textDecoration:'none'}}>
                  {t('login.textToRegister')}
                </NavLink>
              </TextLink>

          </ContainerModalChildren>
      </Modal>
    </>
  )
}

export default ModalLogin