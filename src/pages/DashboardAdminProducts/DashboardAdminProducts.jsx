import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import NavbarPanel from "../../components/NavBarPanel/NavbarPanel"
import { GrayContainerAdmin } from "../../styled-components/Containers/Containers"
import Products from "./components/Products/Products"

const DashboardAdminProducts = () => {
  return (
    <>
        <NavbarAdmin/>
        <GrayContainerAdmin>
            <NavbarPanel/>
            <Products/>
        </GrayContainerAdmin>
    </>
  )
}

export default DashboardAdminProducts