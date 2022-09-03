import { FooterContainer } from "./styled-component/container"
import Logo from "../../assets/Logo/Logo_Restaurant_Design_Bar.png";

const Footer = () => {
  return (
    <FooterContainer>
        <img src={Logo} alt="logo" />
        <span>© 2022 <strong>Restaurant Design Bar</strong>. All rights reserved.</span>
    </FooterContainer>
  )
}

export default Footer