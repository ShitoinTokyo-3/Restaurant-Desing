//Node modules
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
    
    const { t } = useTranslation(['home']);


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
                <h3>{t('introUnderBanner.title')}</h3>
                <p>{t('introUnderBanner.text')}</p>
                <p>{t('introUnderBanner.text2')}</p>
            </TextMain>
            <GrayContainer>
                <BolderLetter>
                    {t("firstGreyContainer")}
                </BolderLetter>
            </GrayContainer>
            <BigLetter>
                    {t("aboveCarousel")}
            </BigLetter>
            <HomeCarousel/>
            <HomeChef setModal={setModalFormFunction}/>
            <GrayContainer>
                <BolderLetter>
                    {t("secondGreyContainer")}
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