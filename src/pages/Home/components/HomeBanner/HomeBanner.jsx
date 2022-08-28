import { useState } from 'react'
import { useTranslation } from "react-i18next";
import banner from '../../../../assets/MainBanner/NewBannerRestaD.jpg'
import bannerRes from '../../../../assets/MainBanner/NewBannerRestDM.jpg'
import { HomeBannerImg, InfoBanner, TextBanner, RellenoDiv, ButtonBannerToForm } from '../../../../styled-components/Banner/banner'
import { ButtonBannerToFormRes, HomeBannerImgRes, InfoBannerRes, TextBannerRes } from '../../../../styled-components/Banner/bannerResponsive'

const HomeBanner = ({setModal}) => {

  const { t } = useTranslation(['home']);
  
  const [bannerImg, setBannerImg] = useState(false)

  const setBannerImgFunction = () => {
      const bannerImg = document.getElementById('bannerImg')
      if(bannerImg.complete && bannerImg.naturalHeight !== 0) setBannerImg(true)
  }

  const setBannerImgFunctionRes = () => {
    const bannerImg = document.getElementById('bannerImgRes')
    if(bannerImg.complete && bannerImg.naturalHeight !== 0) setBannerImg(true)
  }

  return (
    <>
      <HomeBannerImg>
          <img src={banner} alt="banner" onLoad={setBannerImgFunction} id='bannerImg' />
          {bannerImg &&
            <InfoBanner>
                <RellenoDiv />
                <TextBanner>
                    <h2 className='TitleBanner'>
                      {t('homeBanner.title')}
                    </h2>
                    <p>
                      {t('homeBanner.text')}
                    </p>
                    <ButtonBannerToForm onClick={() => setModal()}>
                      {t('homeBanner.buttonText')}
                    </ButtonBannerToForm>
                    <span>{t('homeBanner.underButtonText')}</span>
                </TextBanner>
            </InfoBanner>
          }
      </HomeBannerImg>
      <HomeBannerImgRes>
          <img src={bannerRes} alt="banner" onLoad={setBannerImgFunctionRes} id='bannerImgRes'/>
          {bannerImg &&
            <InfoBannerRes>
              <TextBannerRes>
                <h2 className='TitleBanner'>
                  {t('homeBanner.title')}
                </h2>
                <p>
                  {t('homeBanner.text')}
                </p>
                <ButtonBannerToFormRes onClick={() => setModal()}>
                  {t('homeBanner.buttonTextResponsive')}<br/>
                  {t('homeBanner.buttonTextResponsive2')}
                </ButtonBannerToFormRes>
                <span>
                {t('homeBanner.underButtonTextResponsive')}<br/>
                {t('homeBanner.underButtonTextResponsive2')}
                </span>
              </TextBannerRes>
            </InfoBannerRes>
          }
      </HomeBannerImgRes>
    </>
  )
}

export default HomeBanner