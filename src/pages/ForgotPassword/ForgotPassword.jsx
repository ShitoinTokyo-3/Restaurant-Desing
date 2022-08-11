//Node Modules
import { useState } from "react"
import { Navigate } from "react-router-dom"
//Components
import Modal from "../../components/Modal/Modal"
import { ButtonLoginEmail } from "../../styled-components/Buttons/Buttons.elements"
import { ContainerModalChildren } from "../../styled-components/Containers/Containers"
import ErrorInput from "../../components/ErrorInput/ErrorInput"
//Styled Components
import { FormUsers, InputFormUsers } from "../../styled-components/Form and Inputs/FormAndInputs"
//Pages
import Home from "../Home/Home"
//Icons

const ForgotPassword = () => {

    const [navi, setNavi] = useState(false)
    const [email, setEmail] = useState({
        value: "",
        valid: null,
    })

    const regularExpression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const setModalFunction = () =>{
        setNavi(true)
    }

    if(navi){
        return <Navigate to="/" />;
    }

    const handleChangeInput = ({target: { value }}) => {
        setEmail({ ...email, value: value })

        if(regularExpression.test(value)){
            setEmail({ ...email, valid: true })
        }
    }
    const handleInputBlur = (e) => {
        if (regularExpression.test(email.value)) {
            setEmail({ ...email, valid: true })
        } else {
            setEmail({ ...email, valid: false })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.valid) {
            //TODO: Send email to user
            setModalFunction()
        }
    }


  return (
    <>
        <Home/>
        <Modal
            open={true}
            functionUse={setModalFunction}
            back={true}
        >
            <ContainerModalChildren>
                <h1>Recover Password</h1>
                <FormUsers onSubmit={handleSubmit}>
                    <InputFormUsers
                        type="email"
                        name="email"
                        placeholder="Your email"
                        onChange={handleChangeInput}
                        onBlur={handleInputBlur}
                    />
                    {email.valid === false && <ErrorInput>Please enter a valid email</ErrorInput>}  
                    <ButtonLoginEmail type="submit">Send</ButtonLoginEmail>
                </FormUsers>
            </ContainerModalChildren>
            
        </Modal>
    </>
  )
}

export default ForgotPassword