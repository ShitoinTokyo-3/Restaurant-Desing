//Node Modules
import { useState } from "react"
//Components
import ErrorInput from "../ErrorInput/ErrorInput";
import ForgotPasswordComponent from '../ForgotPasswordComponent/ForgotPasswordComponent'
import TermsOfConditions from "../ModalRegister/components/TermsOfConditions/TermsOfConditions";
//Styled Components
import { ButtonLoginEmail } from "../../styled-components/Buttons/Buttons.elements";
import { ContainerInputFormUsersRegister, FormUsers, InputFormUsers } from "../../styled-components/Form and Inputs/FormAndInputs";
//Icons
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiLock } from "react-icons/bi";

const FormUserRegister = ({ openModal, loginAndRegister, textButton, forgotPassword }) => {

    const firebaseErrors ={
        'auth/email-already-in-use': 'Email already in use',
    }

    const [user, setUser] = useState({
        email: "",
        validemail: null,
        password: "",
        validpassword: null,
        name: "",
        validname: null,
    });
    const [terms, setTerms] = useState(false);
    const [errorTerms, setErrorTerms] = useState(false);
    const [errorFirebase, setErrorFirebase] = useState('');

    const regularExpression = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{6,}$/,
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    }

    const handleSetTerms = (value) => {
        setTerms(value);
        if(value){
            setErrorTerms(false);
        }
    }


    const handleChange = ({target: { name, value }}) => {
        setUser({ ...user, [name]: value })

        if(regularExpression[name].test(value)){
            setUser({ ...user, [name]: value, [`valid${name}`]: true })
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

        if (user.validname && user.validemail && user.validpassword && terms) {
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
        if(!user.validemail && !user.validpassword && !user.validname){
            setUser({ ...user, validemail: false, validpassword: false, validname: false })
        }
        if(!user.validemail && !user.validname && user.validpassword){
            setUser({ ...user, validemail: false, validname: false })
        }
        if(!user.validpassword && !user.validname && user.validemail){
            setUser({ ...user, validpassword: false, validname: false })
        }
        if(!user.validemail && !user.validpassword && user.validname){
            setUser({ ...user, validemail: false, validpassword: false })
        }
        if(!user.validname && user.validpassword && user.validemail){
            setUser({ ...user, validname: false })
        }
        if(!user.validemail && user.validpassword && user.validname){
            setUser({ ...user, validemail: false })
        }
        if(!user.validpassword && user.validemail && user.validname){
            setUser({ ...user, validpassword: false })
        }
        if(!terms){
            setErrorTerms(true)
        }
    }

  return (
    <FormUsers onSubmit={handleSubmit}>

        <ContainerInputFormUsersRegister>
            <InputFormUsers 
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                onBlur={handleBlurInput}
                style={user.validname === false ? 
                    {borderColor: "#cb3234", color:"#cb3234", paddingLeft: "2.3rem"} : 
                    {borderColor: "#ccc", color:'#000', paddingLeft: "2.3rem"}}
            />
            <FiUser className="iconInput" color={user.validname === false? '#cb3234' : '#bbb'}/>
        </ContainerInputFormUsersRegister>
        {user.validname === false && <ErrorInput register={true}>Only letters and spaces</ErrorInput>}
        
        <ContainerInputFormUsersRegister>
            <InputFormUsers 
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                onBlur={handleBlurInput}
                style={user.validemail === false ? 
                    {borderColor: "#cb3234", color:"#cb3234", paddingLeft: "2.3rem"} : 
                    {borderColor: "#ccc", color:'#000', paddingLeft: "2.3rem"}}
            />
            <HiOutlineMail className="iconInput" color={user.validemail === false? '#cb3234' : '#bbb'}/>
        </ContainerInputFormUsersRegister>
        {user.validemail === false && <ErrorInput register={true}>Please enter a valid email</ErrorInput>}

        <ContainerInputFormUsersRegister>
            <InputFormUsers
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlurInput}
                style={user.validpassword === false ? 
                    {borderColor: "#cb3234", color:"#cb3234", paddingLeft: "2.3rem"} : 
                    {borderColor: "#ccc", color:'#000', paddingLeft: "2.3rem", marginBottom: "5px"}}
            />
            <BiLock className="iconInput" color={user.validpassword === false? '#cb3234' : '#bbb'} />
        </ContainerInputFormUsersRegister>
        {user.validpassword === false && <ErrorInput register={true} last={true}>Please enter at least 6 characters</ErrorInput>}

        {forgotPassword ? <ForgotPasswordComponent/> : ''}
        <TermsOfConditions valid={handleSetTerms}>
            I accept the{" "} 
            <a style={{textDecoration:'underline', cursor:'pointer'}}>
                Terms of Services
            </a> 
            {" "}and the{" "} 
            <a style={{textDecoration:'underline', cursor:'pointer'}}>
                Privacy Policy
            </a>.
        </TermsOfConditions>
        
        <TermsOfConditions>
            I agree to receive news and updates from Restaurant Design
        </TermsOfConditions>
        <ButtonLoginEmail type="submit">{textButton}</ButtonLoginEmail>
        {errorTerms && <ErrorInput registerButton={true} last={true}>Please accept the terms and conditions</ErrorInput>}
        {errorFirebase && <ErrorInput registerButton={true} last={true}>{errorFirebase}</ErrorInput>}
        <p style={{textAlign:'left'}}>or sign up with:</p>
    </FormUsers>
  )
}

export default FormUserRegister