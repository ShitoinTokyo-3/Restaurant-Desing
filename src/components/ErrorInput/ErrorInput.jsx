import { MdError } from "react-icons/md"
import { ErrorInputs } from "../../styled-components/Form and Inputs/FormAndInputs"

const ErrorInput = ({children}) => {
  return (
    <ErrorInputs>
        <MdError size={'18px'} style={{marginRight:'10px'}}/>
        {children}
    </ErrorInputs>
  )
}

export default ErrorInput