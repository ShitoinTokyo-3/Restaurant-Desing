import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import NavbarPanel from "../../components/NavBarPanel/NavbarPanel"
import { GrayContainerAdmin } from "../../styled-components/Containers/Containers"
import Categories from "./components/Categories/Categories"

const DashboardAdminCategories = () => {
  return (
    <>
        <NavbarAdmin/>
        <GrayContainerAdmin>
            <NavbarPanel/>
            <Categories/>
        </GrayContainerAdmin>
    </>
  )
}

export default DashboardAdminCategories