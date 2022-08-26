//Node Modules
import { useState } from "react"
import { useTranslation } from "react-i18next";
//Components
import ErrorInput from "../ErrorInput/ErrorInput";
import ForgotPasswordComponent from '../ForgotPasswordComponent/ForgotPasswordComponent'
//Styled Components
import { ButtonLoginEmail } from "../../styled-components/Buttons/Buttons.elements";
import { FormUsers, InputFormUsers } from "../../styled-components/Form and Inputs/FormAndInputs";

const FormUser = ({ openModal, loginAndRegister, textButton, forgotPassword }) => {

    const { t } = useTranslation(['modal']);

    const firebaseErrors ={
        'auth/user-not-found': 'User not found',
        'auth/wrong-password': 'Wrong password',
    }
    const [errorFirebase, setErrorFirebase] = useState('');


    const [user, setUser] = useState({
        email: "",
        validemail: null,
        password: "",
        validpassword: null,
    });

    const regularExpression = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{6,}$/
    }


    const handleChange = ({target: { name, value }}) => {
        setUser({ ...user, [name]: value })

        if(regularExpression[name].test(value)){
            setUser({ ...user,[name]: value , [`valid${name}`]: true })
        }
    };

    const handleBlurInput = ({target: { name, value }}) => {
        if (regularExpression[name].test(value)) {
            setUser({ ...user, [`valid${name}`]: true })
        } else {
            setUser({ ...user, [`valid${name}`]: false })
        }
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.validemail && user.validpassword) {
            try {
                await loginAndRegister(user.email, user.password);
                openModal(false);
                setUser({
                    email: "",
                    validemail: null,
                    password: "",
                    validpassword: null,
                })
                setErrorFirebase('');
            } catch (error) {
                if(firebaseErrors[error.code]) setErrorFirebase(firebaseErrors[error.code]);
                else setErrorFirebase(error.code);
            }
        }
        if(!user.validemail && !user.validpassword){
            setUser({ ...user, validemail: false, validpassword: false })
        }
        if(!user.validemail && user.validpassword){
            setUser({ ...user, validemail: false })
        }
        if(!user.validpassword && user.validemail){
            setUser({ ...user, validpassword: false })
        }
    }

  return (
    <FormUsers onSubmit={handleSubmit}>
        <InputFormUsers 
            type="email"
            name="email"
            id="email"
            placeholder={t('login.form.placeholder1')}
            onChange={handleChange}
            onBlur={handleBlurInput}
            style={user.validemail === false ? 
                {borderColor: "#cb3234", color:"#cb3234"} : 
                {borderColor: "#ccc", color:'#000'}}
        />
        {user.validemail === false && <ErrorInput>{t('login.form.error1')}</ErrorInput>}

        <InputFormUsers
            type="password"
            name="password"
            id="password"
            placeholder={t('login.form.placeholder2')}
            onChange={handleChange}
            onBlur={handleBlurInput}
            style={user.validpassword === false ? 
                {borderColor: "#cb3234", color:"#cb3234"} : 
                {borderColor: "#ccc", color:'#000'}}
        />
        {user.validpassword === false && <ErrorInput>{t('login.form.error2')}</ErrorInput>}

        {forgotPassword ? <ForgotPasswordComponent/> : ''}
    
        <ButtonLoginEmail type="submit">{textButton}</ButtonLoginEmail>
        {errorFirebase && <ErrorInput registerButton={true} last={true}>{errorFirebase}</ErrorInput>}
    </FormUsers>
  )
}

export default FormUser