import { useTranslation } from "react-i18next";
import Modal from "../../../../../../components/Modal/Modal"
import { ContainerModalChildrenRegister } from "../../../../../../styled-components/Containers/Containers"
import Form from "../../../HomeForm/components/Form/Form"

const ModalForm = ({ open, functionUse }) => {

    const { t } = useTranslation(['home']);

  return (
    <Modal
        open={open}
        functionUse={functionUse}
    >
        <ContainerModalChildrenRegister>
            <h1>{t('formModal.title')}</h1>
            <p>{t('formModal.text')}</p>
        </ContainerModalChildrenRegister>
        <Form isModal={true} setOpenModal={functionUse}/>
    </Modal>
  )
}

export default ModalForm