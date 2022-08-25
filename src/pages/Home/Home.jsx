//Node modules
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
//Styled Components
import { 
    BigLetter,
    BolderLetter,
    TextMain,
    GrayContainer
} from "../../styled-components/Containers/Containers";
//Components
import Navbar from "../../components/Navbar/Navbar";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
//Components Home
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import HomeChef from "./components/HomeChef/HomeChef";
import HomeSteps from "./components/HomeSteps/HomeSteps";
import HomeForm from "./components/HomeForm/HomeForm";
import ModalForm from "./components/HomeBanner/components/ModalForm/ModalForm";
import ModalCheckEmail from "../../components/ModalCheckEmail/ModalCheckEmail";

const Home = () => {
    const { t } = useTranslation(['translation']);

    const [modal, setModal] = useState(false);

    const setModalFunction = () => {
        setModal(false);
    }

    const [ModalFormHome, setModalFormHome] = useState(false);
    const [ModalFormCheckEmail, setModalFormCheckEmail] = useState(false);

    const setModalFormHomeFunction = (ModalCheckEmail) => {
        setModalFormHome(false);

        if (ModalCheckEmail === 'ModalCheckEmail') setModalFormCheckEmail(true)
    }

    const setModalFormFunction = () => {
        setModalFormHome(true);
    }

    return (
        <div>
            <Navbar modalOpen={modal} setModal={setModal}/>
            <HomeBanner setModal={setModalFormFunction}/>
            <TextMain>
                <h3>{t('underSlice.Title')}</h3>
                <p>{t('underSlice.text')}</p>
                <p>{t('underSlice.text2')}</p>
            </TextMain>
            <GrayContainer>
                <BolderLetter>
                    {t("underSlice2.title")}
                </BolderLetter>
            </GrayContainer>
            <BigLetter>
                    {t("underSlice2.text")}
            </BigLetter>
            <HomeCarousel/>
            <HomeChef setModal={setModalFormFunction}/>
            <GrayContainer>
                <BolderLetter>
                    That's how easy it will be to place your order!
                </BolderLetter>
            </GrayContainer>
            <HomeSteps/>
            <HomeForm/>

            <ModalLogin
                open={modal}
                functionUse={setModalFunction}
                openModal={setModal}
            />
            <ModalForm open={ModalFormHome} functionUse={setModalFormHomeFunction} />
            <ModalCheckEmail open={ModalFormCheckEmail} functionUse={() => setModalCheckEmail(false)}/>

        </div>
    )

}
export default Home;