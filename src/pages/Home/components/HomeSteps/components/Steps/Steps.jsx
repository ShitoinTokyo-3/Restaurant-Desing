import { StepsContainer } from "./styled-components/Steps.elements"

const Steps = ({children, img, step, colorExample}) => {
  return (
    <StepsContainer>
      {img && <img src={img} alt={step}/>}
      {colorExample && <div className="colorExample" style={{'backgroundColor':colorExample}}/>}
        <h3>{step}</h3>
        <p>{children}</p>
    </StepsContainer>
  )
}

export default Steps