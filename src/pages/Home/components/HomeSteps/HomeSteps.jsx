import { useTranslation } from "react-i18next";
import Steps from "./components/Steps/Steps"
//img
import Steps1 from '../../../../assets/HomeSteps/HomeSteps1.jpg'
import Steps2 from '../../../../assets/HomeSteps/HomeSteps2.jpg'
import Steps3 from '../../../../assets/HomeSteps/HomeSteps3.jpg'
import { StepsContainer, StepsText } from "./styled-components/container.element"

const HomeSteps = () => {

    const { t } = useTranslation(['home']);

    return (
    <>
    <StepsContainer>

        <Steps img={Steps1} step={t("steps.title1")}>{t("steps.text1")}</Steps>

        <Steps img={Steps2} step={t("steps.title2")}>{t("steps.text2")}</Steps>
            
        <Steps img={Steps3} step="Step 3">{t("steps.text3")}</Steps>
            
    </StepsContainer>
    <StepsText>

        <h3>{t("steps.titleReady")}</h3>

        <p>{t("steps.textReady")}</p>
        
    </StepsText>
    </>
  )
}

export default HomeSteps