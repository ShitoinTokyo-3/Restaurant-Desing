import Footer from "../../components/Footer/Footer"
import ModalLogin from "../../components/ModalLogin/ModalLogin"
import Navbar from "../../components/Navbar/Navbar"

const NotFoundPage = () => {
  
  const [modal, setModal] = useState(false);

  const setModalFunction = () => {
      setModal(false);
  }
  return (
    <>
        <Navbar modalOpen={modal} setModal={setModal}/>
        <h1>404 not found</h1>
        <Footer/>
        <ModalLogin
          open={modal}
          functionUse={setModalFunction}
          openModal={setModal}
        />
    </>
  )
}

export default NotFoundPage