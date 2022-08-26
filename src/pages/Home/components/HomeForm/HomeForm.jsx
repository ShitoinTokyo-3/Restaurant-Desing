import { useState } from 'react'
import { useTranslation } from "react-i18next";
import Form from './components/Form/Form'
import { TextMain } from '../../../../styled-components/Containers/Containers'
import { HomeFormContainer } from './styled-components/HomeForm.element'
import ModalCheckEmail from '../../../../components/ModalCheckEmail/ModalCheckEmail'

const HomeForm = () => {
    const [openModal, setOpenModal] = useState(false)

    const { t } = useTranslation(['home']);

    const handleOpenModal = () => {
      setOpenModal(false)
    }
  return (
    <HomeFormContainer>
        <TextMain>
            <h3>{t('titleForm')}</h3>
            <p>{t('textForm1')}<br/>{t('textForm2')}</p>
        </TextMain>
        <Form setOpenModal={setOpenModal}/>
        <ModalCheckEmail open={openModal} functionUse={handleOpenModal}/>
    </HomeFormContainer>
  )
}

export default HomeForm