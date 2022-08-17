//Node Modules
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//i18next
import { useTranslation } from "react-i18next";
//Iconst
import { FaBars, FaTimes } from "react-icons/fa";
//Assets
import Logo from '../../assets/Logo/Logo_Restaurant_Design_Bar.png'
//Styled Components
import { ButtonYellowLogin } from "../../styled-components/Buttons/Buttons.elements";
import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  Menu,
  MenuItem,
  MenuItemLink,
  IconLogoMovile,
  UserNavbar,
} from "./styled-components/Navbar elements/Navbar.elements";
//Services
import { signOutService } from "../../services/Register and Login/logout";

const Navbar = ({ setModal, modalOpen }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }
  const user = useSelector(state => state.user.userInfo);


  const handleLogout = () => {
    signOutService();
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
            <MenuItemLink to='/about'>About</MenuItemLink>
          </MenuItem>

          <MenuItem onClick={handleClick} key='3'>
            <MenuItemLink to='/blog'>Blog</MenuItemLink>
          </MenuItem>

          <MenuItem onClick={handleClick} key='4'>
            <MenuItemLink to='/help'>Help</MenuItemLink>
          </MenuItem>

          {user?.email? (
            <MenuItem onClick={handleClick} key='5'>
              <UserNavbar >
                <img referrerPolicy="no-referrer" src= {user.photoURL} alt=""/>
                <span>{user.displayName? user.displayName.split(' ')[0] : user.email.split('@')[0]}</span>
                <a href='http://localhost:5173/'><ButtonYellowLogin onClick={handleLogout}>Log out</ButtonYellowLogin></a>
              </UserNavbar>
            </MenuItem>):(
            <MenuItem onClick={handleClick} key='5'>
              <ButtonYellowLogin onClick={()=>setModal(!modalOpen)}>Log in</ButtonYellowLogin>
            </MenuItem>)}

        </Menu>

      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar;