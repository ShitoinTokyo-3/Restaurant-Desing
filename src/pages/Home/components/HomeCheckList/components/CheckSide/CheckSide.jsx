import { ButtonPurple, ButtonPurpleVariant, List, ListContainer } from "../../styled-components/ContainerCheck"
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'

const CheckSide = ({ title, text, buttonText, checkList, variant }) => {

    const bgColor = variant ? 'transparent' : '#fff'
  return (
    <ListContainer style={{ background: bgColor }}>
        <h2>{title}</h2>
        <p>{text}</p>
        {checkList.map((check, index) => {
            return (
                <>
                { variant ?
                    <List key={index}>
                        <BsCheckCircle color="var(--Color-Text-Purple)" fontSize={'30px'}/>
                        <span>{check}</span>
                    </List>:
                    <List key={index}>
                        <BsCheckCircleFill color="var(--Color-Text-Purple)" fontSize={'30px'}/>
                        <span>{check}</span>
                    </List>
                }
                </>
            )
        })}
        {variant ?
        <ButtonPurpleVariant>{buttonText}</ButtonPurpleVariant>
        :
        <ButtonPurple>{buttonText}</ButtonPurple>
        }
    </ListContainer>
  )
}

export default CheckSide