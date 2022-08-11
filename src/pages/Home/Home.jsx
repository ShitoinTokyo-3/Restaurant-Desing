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
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import HomeVideo from "./components/HomeVideo/HomeVideo";
import HomeModalLogin from "./components/HomeModalLogin/HomeModalLogin";

const Home = () => {
    const { t } = useTranslation(['translation']);

    const [modal, setModal] = useState(false);

    const setModalFunction = () => {
        setModal(false);
    }

    const user = useSelector(state => state.user.userInfo);
    console.log(user);
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

            <HomeModalLogin
                open={modal}
                functionUse={setModalFunction}
                openModal={setModal}
            />          
        </div>
    )

}
export default Home;