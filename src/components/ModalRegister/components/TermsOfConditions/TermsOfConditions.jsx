import { useState } from "react"
import { CheckboxForm } from "../../../../styled-components/Form and Inputs/FormAndInputs"

const TermsOfConditions = ({children, valid}) => {
  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setChecked(!checked);
    valid(!checked);
  }

  return (
    <CheckboxForm>
        <label>
            <input type='checkbox' onChange={handleChecked} checked={checked}/>
            {children}
        </label>
    </CheckboxForm>

  )
}

export default TermsOfConditions