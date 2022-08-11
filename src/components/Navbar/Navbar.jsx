import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { FaBars, FaTimes } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

import Logo from '../../assets/Logo/Logo_Restaurant_Design_Bar.png'
import { ButtonGreen } from "../../styled-components/Buttons/Buttons.elements";

import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  Menu,
  MenuItem,
  MenuItemLink,
  IconLogoMovile,
  SelectorDropdown,
  SelectorOptions,
  SelectorOptionsNav
} from "./styled-components/Navbar elements/Navbar.elements";

const Navbar = ({ setModal, modalOpen }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <NavbarContainer>
      <NavbarWrapper>

        <IconLogo>
          <Link to='/'><img src={Logo} alt="logo" /></Link>
        </IconLogo>

        <IconLogoMovile onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </IconLogoMovile>

        <Menu click={click}>

          <MenuItem onClick={handleClick} key='1'>
            <MenuItemLink to='/services'>Services</MenuItemLink>
          </MenuItem>

          <MenuItem onClick={handleClick} key='2'>
            <MenuItemLink to='/help'>Help</MenuItemLink>
          </MenuItem> 

          <MenuItem onClick={handleClick} key='3'>
            <ButtonGreen onClick={()=>setModal(!modalOpen)}>Log in</ButtonGreen>
          </MenuItem>
        </Menu>

      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar;