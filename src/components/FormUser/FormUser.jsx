//Node Modules
import { useState } from "react"
//Components
import ErrorInput from "../ErrorInput/ErrorInput";
import ForgotPasswordComponent from '../ForgotPasswordComponent/ForgotPasswordComponent'
//Styled Components
import { ButtonLoginEmail } from "../../styled-components/Buttons/Buttons.elements";
import { FormUsers, InputFormUsers } from "../../styled-components/Form and Inputs/FormAndInputs";

const FormUser = ({ openModal, loginAndRegister, textButton, forgotPassword }) => {



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
            setUser({ ...user, [`valid${name}`]: true })
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
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (
    <FormUsers onSubmit={handleSubmit}>
        <InputFormUsers 
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            onChange={handleChange}
            onBlur={handleBlurInput}
            style={user.validemail === false ? 
                {borderColor: "#cb3234", color:"#cb3234"} : 
                {borderColor: "#ccc", color:'#000'}}
        />
        {user.validemail === false && <ErrorInput>Please enter a valid email</ErrorInput>}

        <InputFormUsers
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlurInput}
            style={user.validpassword === false ? 
                {borderColor: "#cb3234", color:"#cb3234"} : 
                {borderColor: "#ccc", color:'#000'}}
        />
        {user.validpassword === false && <ErrorInput>Please enter at least 6 characters</ErrorInput>}

        {forgotPassword ? <ForgotPasswordComponent/> : ''}
    
        <ButtonLoginEmail type="submit">{textButton}</ButtonLoginEmail>
    </FormUsers>
  )
}

export default FormUser