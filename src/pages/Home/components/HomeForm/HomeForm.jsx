import { useState } from 'react'
import Form from './components/Form/Form'
import { TextMain } from '../../../../styled-components/Containers/Containers'
import { HomeFormContainer } from './styled-components/HomeForm.element'
import ModalCheckEmail from '../../../../components/ModalCheckEmail/ModalCheckEmail'

const HomeForm = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(false)
  }
  return (
    <HomeFormContainer>
        <TextMain>
            <h3>Do you need help with the Marketing of your Restaurant?</h3>
            <p>Tell us how we can help you, an expert in Marketing for <br/>restaurants will contact you.</p>
        </TextMain>
        <Form setOpenModal={setOpenModal}/>
        <ModalCheckEmail open={openModal} functionUse={handleOpenModal}/>
    </HomeFormContainer>
  )
}

export default HomeForm