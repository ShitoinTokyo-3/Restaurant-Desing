import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Logo from '../../assets/Logo/Logo_Restaurant_Design_Bar.png'
import { ButtonGreen } from "../../styled-components/Buttons/Buttons.elements";
import { removeSpaces } from "../../utilities/Strings/Strings";

import { FaBars, FaTimes } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";

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

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [categoriesClick, setCategoriesClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const handleCategoriesClick = () => {
    setCategoriesClick(!categoriesClick);
  }



  const { i18n } = useTranslation();
  const Categories = {
    "en":[
        "Brand & Identity",
        "Advertising",
        "Packaging & Label",
        "Clothing & Merchandise",
        "Social Media",
        "Videos"
    ],
    "es":[
        "Identidad de Marca",
        "Publicidad",
        "Embalaje y Etiquetas",
        "Prendas y Mercancía",
        "Redes Sociales",
        "Videos"
    ]
  }
  const lanCategories = i18n.language === "en" ? Categories.en : Categories.es;

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

          <MenuItem onClick={handleClick}>
              <SelectorDropdown 
                type="text" 
                placeholder="Categories" 
                readOnly 
                onClick={handleCategoriesClick}
              />
              <GoChevronDown 
                style={{zIndex: 1000, marginLeft:'13px', fontSize:'1.2rem', color:'#555', cursor:'pointer'}}
                onClick={handleCategoriesClick}
              />
                <SelectorOptions click={categoriesClick}>
                  {lanCategories.map((item, index) => {
                    return (
                        <SelectorOptionsNav to={removeSpaces(Categories.en[index])}>
                          <div>{item}</div>
                        </SelectorOptionsNav>
                    )
                  })}
                </SelectorOptions>
          </MenuItem>

          <MenuItem onClick={handleClick}>
            <MenuItemLink to='/services'>Services</MenuItemLink>
          </MenuItem>

          <MenuItem onClick={handleClick}>
            <MenuItemLink to='/help'>Help</MenuItemLink>
          </MenuItem> 

          <MenuItem onClick={handleClick}>
            <Link to='/'><ButtonGreen>NEED A DESING?</ButtonGreen></Link>
          </MenuItem>
        </Menu>

      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar;