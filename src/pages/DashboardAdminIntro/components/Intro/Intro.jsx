import { useTranslation } from "react-i18next";
import { WhiteContainer } from "../../../../styled-components/Containers/Containers"
import { TextContainer } from "../styled-components/textContainer"

const Intro = () => {
    const { t } = useTranslation(['dashboardAdmin']);
    return (
    <WhiteContainer>
        <TextContainer>
            <h1>{t("intro.title")}</h1>
            <p>{t("intro.text")}</p>

            
        </TextContainer>
    </WhiteContainer>
  )
}

export default Intro