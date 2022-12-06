//Node modules
import { useState } from "react";
import { useTranslation } from "react-i18next";
//Styled Components
import { 
    BolderLetter,
    TextMain,
    GrayContainer,
    GrayContainervariant,
    TextUpperCarrousel
} from "../../styled-components/Containers/Containers";
//Icons
import { 
    AiOutlineHighlight,
    AiOutlineDollar,
    AiOutlineException
} from "react-icons/ai";
//Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
//Components Home
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import HomeChef from "./components/HomeChef/HomeChef";
import HomeSteps from "./components/HomeSteps/HomeSteps";
import HomeForm from "./components/HomeForm/HomeForm";
import ModalForm from "./components/HomeBanner/components/ModalForm/ModalForm";
import ModalCheckEmail from "../../components/ModalCheckEmail/ModalCheckEmail";
import HomeCheckList from "./components/HomeCheckList/HomeCheckList";
import { useGetCarouselQuery } from "../../redux/restApi";

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

    const handleCheckEmail = () => {
        setModalFormCheckEmail(false);
    }

    const { data } = useGetCarouselQuery();
    
    return (
        <div>
            <Navbar modalOpen={modal} setModal={setModal}/>
            <HomeBanner setModal={setModalFormFunction}/>
            <GrayContainer>
                <TextMain>
                    <h3>{t('introUnderBanner.title')}</h3>
                    <p>{t('introUnderBanner.text')}</p>
                </TextMain>
                <HomeCheckList setModal={setModalFormFunction}/>

            </GrayContainer>
            <TextUpperCarrousel>
                <h2>{t("firstGreyContainer")}</h2>
                <p>{t("firstGreyContainer2")}</p>
                <div>
                    <span><AiOutlineDollar style={{'marginRight': '5px'}}/> {t("firstGreyContainer3")}</span>
                    <span><AiOutlineHighlight style={{'marginRight': '5px'}}/> {t("firstGreyContainer5")}</span>
                    <span><AiOutlineException style={{'marginRight': '5px'}}/> {t("firstGreyContainer4")}</span>
                </div>
            </TextUpperCarrousel>
            {data?.length
             && <HomeCarousel  mainCarouselInfo={data}/>}
            <HomeChef setModal={setModalFormFunction}/>
            <GrayContainervariant>
                <BolderLetter>
                    {t("secondGreyContainer")}
                </BolderLetter>
                <HomeSteps/>
            </GrayContainervariant>
            <HomeForm/>
            <Footer/>

            <ModalLogin
                open={modal}
                functionUse={setModalFunction}
                openModal={setModal}
            />
            <ModalForm open={ModalFormHome} functionUse={setModalFormHomeFunction} />
            <ModalCheckEmail open={ModalFormCheckEmail} functionUse={handleCheckEmail}/> 

        </div>
    )

}
export default Home;