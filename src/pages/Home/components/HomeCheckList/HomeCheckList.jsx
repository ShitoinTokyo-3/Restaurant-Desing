import { useTranslation } from "react-i18next";
import CheckSide from "./components/CheckSide/CheckSide"
import { ContainerCheck } from "./styled-components/ContainerCheck"

const HomeCheckList = ({ setModal }) => {

  const { t } = useTranslation(['home']);

  const listLeft =[
    t('homeCheckList.left.check1'),
    t('homeCheckList.left.check2'),
    t('homeCheckList.left.check3'),
    t('homeCheckList.left.check4'),
    t('homeCheckList.left.check5'),
  ]
  const listRight =[
    t('homeCheckList.right.check1'),
    t('homeCheckList.right.check2'),
    t('homeCheckList.right.check3'),
    t('homeCheckList.right.check4'),
    t('homeCheckList.right.check5'),
  ]

  return (
    <ContainerCheck>
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