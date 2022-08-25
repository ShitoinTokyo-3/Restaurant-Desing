import { useState } from 'react'
import banner from '../../../../assets/MainBanner/NewBannerRestaD.png'
import bannerRes from '../../../../assets/MainBanner/NewBannerRestDM.png'
import ModalCheckEmail from '../../../../components/ModalCheckEmail/ModalCheckEmail'
import { HomeBannerImg, InfoBanner, TextBanner, RellenoDiv, ButtonBannerToForm } from '../../../../styled-components/Banner/banner'
import { ButtonBannerToFormRes, HomeBannerImgRes, InfoBannerRes, TextBannerRes } from '../../../../styled-components/Banner/bannerResponsive'
import ModalForm from './components/ModalForm/ModalForm'

const HomeBanner = ({setModal}) => {

  return (
    <>
      <HomeBannerImg>
          <img src={banner} alt="banner" />
          <InfoBanner>
              <RellenoDiv />
              <TextBanner>

                  <h2 className='TitleBanner'>
                    Make customers fall in love with your food and brand.
                  </h2>
                  <p>
                    While we set the table, 
                    we invite you over for a free 
                    consultation with one of our Restaurant Marketing experts.
                  </p>
                  <ButtonBannerToForm onClick={() => setModal()}>
                    Book a 15 min call with us
                  </ButtonBannerToForm>
                  <span>FREE. No commitment. No hidden fees.</span>
              </TextBanner>
          </InfoBanner>
      </HomeBannerImg>
      <HomeBannerImgRes>
          <img src={bannerRes} alt="banner" />
          <InfoBannerRes>
            <TextBannerRes>
              <h2 className='TitleBanner'>
                Make customers fall in love with your food and brand.
              </h2>
              <p>
                While we set the table, 
                we invite you over for a free 
                consultation with one of our Restaurant Marketing experts.
              </p>
              <ButtonBannerToFormRes onClick={() => setModal()}>
                Book a 15 min <br/>call with us
              </ButtonBannerToFormRes>
              <span>FREE. No commitment.<br/> No hidden fees.</span>
            </TextBannerRes>
          </InfoBannerRes>
      </HomeBannerImgRes>
    </>
  )
}

export default HomeBanner