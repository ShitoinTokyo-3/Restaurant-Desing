import { MdError } from "react-icons/md"
import { ErrorInputs } from "../../styled-components/Form and Inputs/FormAndInputs"

const ErrorInput = ({children , register, last, registerButton}) => {
  return (
    <ErrorInputs 
      style={register && last? {marginLeft:'2rem', marginBottom:'0'}:
        register? {marginLeft:'2rem'} :
        registerButton? {paddingLeft:'0', margin: '0 auto', marginTop:'-.7rem', } :
        {}}>
        <MdError size={'18px'} style={{marginRight:'10px'}}/>
        {children}
    </ErrorInputs>
  )
}

export default ErrorInput