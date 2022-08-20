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

const Home = () => {
    const { t } = useTranslation(['translation']);

    const [modal, setModal] = useState(false);

    const setModalFunction = () => {
        setModal(false);
    }



    return (
        <div>
            <Navbar modalOpen={modal} setModal={setModal}/>
            <HomeBanner/>
            <TextMain>
                <h3>{t('underSlice.Title')}</h3>
                <p>{t('underSlice.text')}</p>
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
            <HomeChef/>
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

        </div>
    )

}
export default Home;