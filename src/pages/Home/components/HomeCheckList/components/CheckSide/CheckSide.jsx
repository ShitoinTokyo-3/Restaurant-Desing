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
        {checkList.map((check) => {
            return (
                <div key={check.id}>
                { variant ?
                    <List >
                        <BsCheckCircle color="var(--Color-Text-Purple)" className="iconCheck"/>
                        <span>{check.text}</span>
                    </List>:
                    <List>
                        <BsCheckCircleFill color="var(--Color-Text-Purple)" className="iconCheck"/>
                        <span>{check.text}</span>
                    </List>
                }
                </div>
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