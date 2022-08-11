import { NavLink } from "react-router-dom"
import { ForgotPasswordForm } from "../../styled-components/Form and Inputs/FormAndInputs"

const ForgotPasswordComponent = () => {
  return (
    <>
      <ForgotPasswordForm>
        <NavLink to={'/forgot-password'} style={{color:'#000'}}>
        Forgot password? 
        </NavLink>
      </ForgotPasswordForm>
    </>
  )
}

export default ForgotPasswordComponent
