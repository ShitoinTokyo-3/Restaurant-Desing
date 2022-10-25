import { useTranslation } from "react-i18next";
import CheckSide from "./components/CheckSide/CheckSide"
import { ContainerCheck } from "./styled-components/ContainerCheck"

const HomeCheckList = ({ setModal }) => {

  const { t } = useTranslation(['home']);

  const listLeft =[
    {
      id:1,
      text:t('homeCheckList.left.check1')
    },
    {
      id:2,
      text:t('homeCheckList.left.check2')
    },
    {
      id:3,
      text:t('homeCheckList.left.check3')
    },
    {
      id:4,
      text:t('homeCheckList.left.check4')
    },
    {
      id:5,
      text:t('homeCheckList.left.check5')
    }
  ]
  const listRight =[
    {
      id:6,
      text:t('homeCheckList.right.check1')
    },
    {
      id:7,
      text:t('homeCheckList.right.check2')
    },
    {
      id:8,
      text:t('homeCheckList.right.check3')
    },
    {
      id:9,
      text:t('homeCheckList.right.check4')
    },
    {
      id:10,
      text:t('homeCheckList.right.check5')
    },
  ]

  return (
    <ContainerCheck >
      <CheckSide 
        checkList={listRight} 
        variant={false}
        title={t('homeCheckList.right.title')}
        buttonText={t('homeCheckList.right.buttonText')}
        comingSoon={t('homeCheckList.comingSoon')}
      >
        <p>
          {t('homeCheckList.right.text')}
        </p>
      </CheckSide>
      <CheckSide
        variant={true}
        checkList={listLeft}
        title={t('homeCheckList.left.title')}
        buttonText={t('homeCheckList.left.buttonText')}
        comingSoon={''}
        setFunction={setModal}
      >
        <p>
          {t('homeCheckList.left.text')}
        </p>
      </CheckSide>

    </ContainerCheck>
  )
}

export default HomeCheckList