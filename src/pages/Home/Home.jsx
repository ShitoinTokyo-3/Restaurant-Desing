//Node modules
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
//Styled Components
import { 
    BigLetter,
    BolderLetter,
    TextMain,
    YellowContainer
} from "../../styled-components/Containers/Containers";
//Components
import Navbar from "../../components/Navbar/Navbar";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import ModalRegister from "../../components/ModalRegister/ModalRegister";
//Components Home
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import HomeVideo from "./components/HomeVideo/HomeVideo";

const Home = () => {
    const { t } = useTranslation(['translation']);

    const [modal, setModal] = useState(false);

    const setModalFunction = () => {
        setModal(false);
    }
    return (
        <div>
            <Navbar modalOpen={modal} setModal={setModal} />
            <HomeVideo/>
            <TextMain>
                <h3>{t('underSlice.Title')}</h3>
                <p>{t('underSlice.text')}</p>
            </TextMain>
            <YellowContainer>
                <BolderLetter>
                    {t("underSlice2.title")}
                </BolderLetter>
            </YellowContainer>

            <BigLetter>
                    {t("underSlice2.text")}
            </BigLetter>
            <HomeCarousel/>

            <ModalLogin
                open={modal}
                functionUse={setModalFunction}
                openModal={setModal}
            />
            {/* <ModalRegister
                open={modal}
                functionUse={setModalFunction}
                openModal={setModal}
            /> */}

        </div>
    )

}
export default Home;