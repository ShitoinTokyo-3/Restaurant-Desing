import { HomeChefContainer, HomeChefLeft, HomeChefRight } from "./styled-components/HomeChef.element"
import { ButtonBannerToForm } from "../../../../styled-components/Banner/banner"
import Chef from '../../../../assets/HomeImages/HomeChefNew.png'
import { useTranslation } from "react-i18next";

const HomeChef = ({setModal}) => {

    const { t } = useTranslation(['home']);

    return (
    <HomeChefContainer>
        <HomeChefLeft>
            <img src={Chef} alt=""/>
        </HomeChefLeft>
        <HomeChefRight>

            <h3>{t("homeChef.title")}</h3>

            <p>{t("homeChef.text1")}</p>

            <p>{t("homeChef.text2")}</p>

            <p>{t("homeChef.text3")}</p>

            <ButtonBannerToForm className="ButtonChef"  onClick={setModal}>
                {t("homeChef.buttonText")}
            </ButtonBannerToForm>

        </HomeChefRight>
    </HomeChefContainer>
  )
}

export default HomeChef