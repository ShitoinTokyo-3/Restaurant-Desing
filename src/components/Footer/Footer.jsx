import { useTranslation } from "react-i18next";
import { FooterContainer } from "./styled-component/container"
import Logo from "../../assets/Logo/Restaurant Design Bar White.png";
import { BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
    const { t } = useTranslation(['footer']);
  
  return (
    <FooterContainer>
        <a href="/#">
          <img src={Logo} alt="logo" />
        </a>
        <div>
          <a href={t('linkFacebook')} target='_blank'>
            <BsFacebook id="iconsFooter"/>
          </a>
          <a href={t('linkInstagram')} target='_blank'>
            <BsInstagram id="iconsFooter"/>
          </a>
          <a href={t('linkTwitter')} target='_blank'>
            <BsTwitter id="iconsFooter" />
          </a>
        </div>
        <span>{t('rightsReserved1')}<strong>{t('rightsReserved2')}</strong>{t('rightsReserved3')}</span>
    </FooterContainer>
  )
}

export default Footer