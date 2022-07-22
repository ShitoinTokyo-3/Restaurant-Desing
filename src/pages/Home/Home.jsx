import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import { BigLetter, BolderLetter, TextMain, YellowContainer } from "../../styled-components/Containers/Containers";
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import HomeVideo from "./components/HomeVideo/HomeVideo";

const Home = () => {
    const { t } = useTranslation(['translation']);
    return (
        <div>
            <Navbar/>
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
        </div>
    )

}
export default Home;