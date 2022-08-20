import Steps from "./components/Steps/Steps"
//img
import Steps1 from '../../../../assets/HomeSteps/HomeSteps1.jpg'
import Steps2 from '../../../../assets/HomeSteps/HomeSteps2.jpg'
import Steps3 from '../../../../assets/HomeSteps/HomeSteps3.jpg'
import { StepsContainer, StepsText } from "./styled-components/container.element"

const HomeSteps = () => {
  return (
    <>
    <StepsContainer>
        <Steps
            img={Steps1}
            step="Step 1"
        >
            Choose the category to which your business or restaurant belongs.
        </Steps>
        <Steps
            img={Steps2}
            step="Step 2"
        >
            Choose some logos for reference and the color palette of your brand.
        </Steps>
        <Steps
            img={Steps3}
            step="Step 3"
        >
            Type in your business information for the designer to start working.
        </Steps>

    </StepsContainer>
    <StepsText>
        <h3>And ready!</h3>
        <p>
            Our designers will be ready to work on your order.
        </p>
    </StepsText>
    </>
  )
}

export default HomeSteps