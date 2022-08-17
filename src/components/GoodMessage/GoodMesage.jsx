import { AiFillCheckCircle } from 'react-icons/ai'
import { GoodMessage } from '../../styled-components/Form and Inputs/FormAndInputs'
const GoodMesage = ({children, register, last, registerButton }) => {
  return (
    <GoodMessage
        style={register && last? {marginLeft:'2rem', marginBottom:'0'}:
        register? {marginLeft:'2rem'} :
        registerButton? {paddingLeft:'0', margin: '0 auto',  } :
        {}}>
      <AiFillCheckCircle size={'18px'} style={{marginRight:'5px'}}/>
      {children}
  </GoodMessage>
  )
}

export default GoodMesage