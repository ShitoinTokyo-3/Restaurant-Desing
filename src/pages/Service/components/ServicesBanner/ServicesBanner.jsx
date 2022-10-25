import { useState } from "react"
import logoWhite  from "../../../../assets/Logo/Restaurant Design Bar White.png"
import { AiFillCheckCircle } from "react-icons/ai"
import { ButtonBannerServices, InfoServicesBanner, ListServicesContainer, ServicesBannerContainer, TextServicesBanner } from "../../../../styled-components/Banner/banner"

const ServicesBanner = ({ functionUse }) => {

    const [bannerImg, setBannerImg] = useState(false)

    const setBannerImgFunction = () => {
        const bannerImage = document.getElementById('bannerImg')
        if(bannerImage.complete && bannerImage.naturalHeight !== 0) setBannerImg(true)
    }

  return (
    <ServicesBannerContainer>
        <img src={'http://leafydigitalmedia.com/wp-content/uploads/2022/09/Banners-RDB-service-logo.png'} alt="banner" onLoad={setBannerImgFunction} id='bannerImg' />


        <InfoServicesBanner>
            <TextServicesBanner>
                <img src={logoWhite} alt="logo" id="LogoServicesbanner" />
                {bannerImg && <>
                <ListServicesContainer>
                    <div>
                        <li><AiFillCheckCircle color="var(--Color-Text-Purple)" /> <span>GET A 1ST DRAFT WITHING 48 HRS</span></li>
                        <li><AiFillCheckCircle color="var(--Color-Text-Purple)" /> <span>YOU KEEP EVERY FILE</span></li>
                        <li><AiFillCheckCircle color="var(--Color-Text-Purple)" /> <span>100% MONEY BACK GUARANTEED</span></li>
                    </div>
                </ListServicesContainer>
                <ButtonBannerServices 
                    onClick={() => functionUse(true)}
                >
                    GET STARTED
                </ButtonBannerServices>
                </>}
            </TextServicesBanner>
        </InfoServicesBanner>

    </ServicesBannerContainer>
  )
}

export default ServicesBanner