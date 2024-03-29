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
import { ButtonLogin } from "../../styled-components/Buttons/Buttons.elements";
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
import { signOutService } from "../../services/RegisterandLogin/logout";

const Navbar = ({ setModal, modalOpen}) => {

  const { t } = useTranslation(['navbar']);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if(!click){
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = function(){ window.scrollTo(x, y) };
    }else window.onscroll = null;

  }
  const handleCLickNavItem = () => {
    setClick(false);
  }
  const user = useSelector(state => state.user.userInfo);
  const userBackend = useSelector(state => state.user.userInfoBackend);


  const handleLogout = () => {
    signOutService();
  }

  return (
    <NavbarContainer id="#">
      <NavbarWrapper>

        <IconLogo>
          <Link to='/'><img src={Logo} alt="logo" /></Link>
        </IconLogo>

        <IconLogoMovile onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </IconLogoMovile>

        <Menu click={click}>

          {/* <MenuItem onClick={handleCLickNavItem} key='22'>
          <MenuItemLink to='/'>{t('option1')}</MenuItemLink>
          </MenuItem>

          <MenuItem onClick={handleCLickNavItem} key='33'>
            <MenuItemLink to='/about'>{t('option2')}</MenuItemLink>
          </MenuItem>

          <MenuItem onClick={handleCLickNavItem} key='44'>
            <MenuItemLink to='/help'>{t('option3')}</MenuItemLink>
          </MenuItem> */}

          {userBackend?.role === 'admin' && (
            <MenuItem onClick={handleCLickNavItem} key='22'>
              <MenuItemLink to='/dashboard-admin/intro'>{t('dashboard')}</MenuItemLink>
            </MenuItem>
          )}

          {user?.email? (
            <MenuItem onClick={handleCLickNavItem} key='55'>
              <UserNavbar >
              
              {user.photoURL ?
                <img referrerPolicy="no-referrer" src= {user.photoURL} alt=""/> :
                <img referrerPolicy="no-referrer" src= 'https://graph.facebook.com/110674471745137/picture' alt=""/>}
                
                <span>
                  {user.displayName? 
                    user.displayName.split(' ')[0] : 
                    user.email.split('@')[0].replace(/[0-9]+/g,'')}
                </span>
                <a href='/'><ButtonLogin onClick={handleLogout}>{t('logout')}</ButtonLogin></a>
              </UserNavbar>
            </MenuItem>):(
              <>
                <MenuItem onClick={handleCLickNavItem} key='66'>
                  <ButtonLogin onClick={()=>setModal(!modalOpen)}>{t('login')}</ButtonLogin>
                </MenuItem>
              </>)}

        </Menu>

      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar;