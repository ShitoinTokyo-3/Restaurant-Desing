import { ButtonStepsToForm } from "../../../../styled-components/Banner/banner"
import { BolderLetter } from "../../../../styled-components/Containers/Containers"
import Steps from "../../../Home/components/HomeSteps/components/Steps/Steps"
import { StepsContainer } from "../../../Home/components/HomeSteps/styled-components/container.element"
import step1 from '../../../../assets/HomeSteps/HomeSteps1.png'
import step2 from '../../../../assets/HomeSteps/HomeSteps2.png'
import step3 from '../../../../assets/HomeSteps/HomeSteps3.png'

const ServicesSteps = ({ functionUse }) => {
  return (
    <div style={{'display':'flex', 'flexDirection':'column' }}>
        <BolderLetter>
            HOW IT WORKS
        </BolderLetter>
        <StepsContainer>
            <Steps step={'STEP 1'} img={step1}>
                Choose the category to which your business or restaurant belongs.
            </Steps>
            <Steps step={'STEP 2'} img={step2}>
                Choose some logos for reference and the color palette of your brand.
            </Steps>
            <Steps step={'STEP 3'} img={step3}>
                Type in your business information for the designer to start working.
            </Steps>
        </StepsContainer>
        <ButtonStepsToForm
            onClick={() => functionUse(true)}
        >
            GET STARTED
        </ButtonStepsToForm>
    </div>
  )
}

export default ServicesSteps