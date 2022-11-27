import {
    AdminIconLogo, 
    AdminMenu, 
    AdminMenuItem, 
    AdminMenuLink, 
    NavbarAdminContainer, 
    NavbarAdminWrapper 
} from "./styled-components/NavbarAdmin"
import Logo from "../../assets/Logo/Logo_Restaurant_Design_Bar.png"
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <NavbarAdminContainer>
        <NavbarAdminWrapper>
            <AdminIconLogo>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </AdminIconLogo>
            <AdminMenu>
                <AdminMenuItem>
                    <AdminMenuLink to="/">
                        <BiHome />
                    </AdminMenuLink>
                </AdminMenuItem>
            </AdminMenu>
        </NavbarAdminWrapper>
    </NavbarAdminContainer>
  )
}

export default NavbarAdmin