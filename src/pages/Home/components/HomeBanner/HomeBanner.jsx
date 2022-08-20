import { useState } from 'react'
import banner from '../../../../assets/MainBanner/NewBannerRestaD.png'
import bannerRes from '../../../../assets/MainBanner/NewBannerRestDM.png'
import ModalCheckEmail from '../../../../components/ModalCheckEmail/ModalCheckEmail'
import { HomeBannerImg, InfoBanner, TextBanner, RellenoDiv, ButtonBannerToForm } from '../../../../styled-components/Banner/banner'
import { ButtonBannerToFormRes, HomeBannerImgRes, InfoBannerRes, TextBannerRes } from '../../../../styled-components/Banner/bannerResponsive'
import ModalForm from './components/ModalForm/ModalForm'

const HomeBanner = () => {

    const [modal, setModal] = useState(false)
    const [openModalCheckEmail, setOpenModalCheckEmail] = useState(false)

    const setModalFunction = (ModalCheckEmail) => {
        setModal(false)

        if (ModalCheckEmail === 'ModalCheckEmail') setOpenModalCheckEmail(true)

    }
  return (
    <>
      <HomeBannerImg>
          <img src={banner} alt="banner" />
          <InfoBanner>
              <RellenoDiv />
              <TextBanner>

                  <h2 className='MessageFriend'>
                      Welcome <br />
                      My name is Carla ...
                  </h2>
                  <h2 className='TitleBanner'>
                    We are cooking something very special for your business.
                  </h2>
                  <p>
                    While we set the table, we invite you to receive a consultation with an expert in gastronomic marketing
                  </p>
                  <ButtonBannerToForm onClick={() => setModal(true)}>
                  FREE CONSULTING
                  </ButtonBannerToForm>
              </TextBanner>
          </InfoBanner>
      </HomeBannerImg>
      <HomeBannerImgRes>
          <img src={bannerRes} alt="banner" />
          <InfoBannerRes>
            <TextBannerRes>
              <h2 className='TitleBanner'>
                We are cooking something very special for your business.
              </h2>
              <p>
                While we set the table, we invite you to receive a consultation with an expert in gastronomic marketing
              </p>
              <ButtonBannerToFormRes onClick={() => setModal(true)}>
              FREE CONSULTING
              </ButtonBannerToFormRes>
            </TextBannerRes>
          </InfoBannerRes>
      </HomeBannerImgRes>
      <ModalForm open={modal} functionUse={setModalFunction} />
      <ModalCheckEmail open={openModalCheckEmail} functionUse={() => setOpenModalCheckEmail(false)}/>

    </>
  )
}

export default HomeBanner