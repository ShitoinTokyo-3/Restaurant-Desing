import { GrayContainerAdmin } from "../../styled-components/Containers/Containers"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import NavbarPanel from "../../components/NavBarPanel/NavbarPanel"
import Intro from "./components/Intro/Intro"

const DashboardAdminIntro = () => {
  return (
    <>
      <NavbarAdmin/>
      <GrayContainerAdmin>
        <NavbarPanel/>
        <Intro/>
      </GrayContainerAdmin>
    </>
  )
}

export default DashboardAdminIntro