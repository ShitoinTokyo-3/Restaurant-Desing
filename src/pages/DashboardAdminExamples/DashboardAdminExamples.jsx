import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import NavbarPanel from "../../components/NavBarPanel/NavbarPanel"
import { GrayContainerAdmin } from "../../styled-components/Containers/Containers"
import ProductsExamples from "./components/ProductsExamples.js/ProductsExamples"

const DashboardAdminExamples = () => {
  return (
    <>
        <NavbarAdmin/>
        <GrayContainerAdmin>
            <NavbarPanel/>
            <ProductsExamples/>
        </GrayContainerAdmin>
    </>
  )
}

export default DashboardAdminExamples