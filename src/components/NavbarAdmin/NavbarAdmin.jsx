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

const NavbarAdmin = () => {
  return (
    <NavbarAdminContainer>
        <NavbarAdminWrapper>
            <AdminIconLogo>
                <img src={Logo} alt="logo" />
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