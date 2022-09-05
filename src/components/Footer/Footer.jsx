import { FooterContainer } from "./styled-component/container"
import Logo from "../../assets/Logo/Logo_Restaurant_Design_Bar.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
        <a href="/#">
          <img src={Logo} alt="logo" />
        </a>
        <span>© 2022 <strong>Restaurant Design Bar</strong>. All rights reserved.</span>
    </FooterContainer>
  )
}

export default Footer