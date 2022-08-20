import { StepsContainer } from "./styled-components/Steps.elements"

const Steps = ({children, img, step}) => {
  return (
    <StepsContainer>
        <img src={img} alt=""/>
        <h3>{step}</h3>
        <p>{children}</p>
    </StepsContainer>
  )
}

export default Steps