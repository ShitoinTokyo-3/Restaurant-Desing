import { ButtonPurple, ButtonPurpleVariant, List, ListContainer } from "../../styled-components/ContainerCheck"
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'

const CheckSide = ({ title, children, buttonText, checkList, variant, setFunction, comingSoon }) => {

    const bgColor = variant ? 'transparent' : '#fff'

    const handleButton = () => {
        if(setFunction) setFunction()
    }
  return (
    <ListContainer style={{ background: bgColor }}>
        <h2>{title}</h2>
        {children}
        {checkList.map((check, index) => {
            return (
                <>
                { variant ?
                    <List key={index}>
                        <BsCheckCircle color="var(--Color-Text-Purple)" className="iconCheck"/>
                        <span>{check}</span>
                    </List>:
                    <List key={index}>
                        <BsCheckCircleFill color="var(--Color-Text-Purple)" className="iconCheck"/>
                        <span>{check}</span>
                    </List>
                }
                </>
            )
        })}
        {variant ?
        <ButtonPurpleVariant onClick={handleButton} >{buttonText}</ButtonPurpleVariant>
        :
        <ButtonPurple onClick={handleButton}>{buttonText}</ButtonPurple>
        }
        {comingSoon && <p className="ComingSoon">{comingSoon}</p>}
    </ListContainer>
  )
}

export default CheckSide