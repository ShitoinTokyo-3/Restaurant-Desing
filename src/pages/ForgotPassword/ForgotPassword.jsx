//Node Modules
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
//Components
import Modal from "../../components/Modal/Modal"
import { ButtonLoginEmail } from "../../styled-components/Buttons/Buttons.elements"
import { ContainerModalChildren } from "../../styled-components/Containers/Containers"
import ErrorInput from "../../components/ErrorInput/ErrorInput"
//Styled Components
import { FormUsers, InputFormUsers } from "../../styled-components/Form and Inputs/FormAndInputs"
//Pages
import Home from "../Home/Home"
//Services
import { recoverPassword } from "../../services/RegisterandLogin/recoverPassword"
import GoodMesage from "../../components/GoodMessage/GoodMesage"

const ForgotPassword = () => {

    const { t } = useTranslation(['modal']);

    const errorsFirebase = {
        'auth/user-not-found': 'User not found',
    }

    const [firebaseError, setFirebaseError] = useState('')
    const [navi, setNavi] = useState(false)
    const [email, setEmail] = useState({
        value: "",
        valid: null,
    })
    const [goodMessage, setGoodMessage] = useState(false)

    const regularExpression ={ 
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const setModalFunction = () =>{
        setNavi(true)
    }

    if(navi){
        return <Navigate to="/" />;
    }

    const handleChangeInput = ({target: { value }}) => {
        setEmail({ ...email, value: value })

        if(regularExpression['email'].test(value)){
            setEmail({ ...email, value: value, valid: true })
        }
    }
    const handleInputBlur = (e) => {
        if (regularExpression['email'].test(email.value)) {
            setEmail({ ...email, valid: true })
        } else {
            setEmail({ ...email, valid: false })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email.valid) {
            try {
                await recoverPassword(email.value)
                setGoodMessage(true)
                setFirebaseError('')
            } catch (error) {
                if(errorsFirebase[error.code]) setFirebaseError(errorsFirebase[error.code])
                else setFirebaseError(error.code)
            }
        }else{
            setEmail({ ...email, valid: false })
        }
    }


  return (
    <>
        <Modal
            open={true}
            functionUse={setModalFunction}
            back={true}
        >
            <ContainerModalChildren>
                <h1>{t('forgotPassword.title')}</h1>
                <FormUsers onSubmit={handleSubmit}>
                    <InputFormUsers
                        type="email"
                        name="email"
                        placeholder={t('forgotPassword.form.placeholder1')}
                        onChange={handleChangeInput}
                        onBlur={handleInputBlur}
                    />
                    {email.valid === false && <ErrorInput>{t('forgotPassword.form.error1')}</ErrorInput>}  
                    <ButtonLoginEmail type="submit">{t('forgotPassword.form.textButton')}</ButtonLoginEmail>
                    {firebaseError  && <ErrorInput registerButton={true} last={true}>{firebaseError}</ErrorInput>}
                    {goodMessage && <GoodMesage registerButton={true} last={true}>{t('forgotPassword.form.goodText')}</GoodMesage>}
                </FormUsers>
            </ContainerModalChildren>
            
        </Modal>
    </>
  )
}

export default ForgotPassword