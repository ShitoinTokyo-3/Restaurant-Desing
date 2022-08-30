import { useTranslation } from "react-i18next";
import CheckSide from "./components/CheckSide/CheckSide"
import { ContainerCheck } from "./styled-components/ContainerCheck"

const HomeCheckList = () => {

  const { t } = useTranslation(['home']);

  const listLeft =[
    t('homeCheckList.left.check1'),
    t('homeCheckList.left.check2'),
    t('homeCheckList.left.check3'),
    t('homeCheckList.left.check4'),
  ]
  const listRight =[
    t('homeCheckList.right.check1'),
    t('homeCheckList.right.check2'),
    t('homeCheckList.right.check3'),
    t('homeCheckList.right.check4'),
  ]

  return (
    <ContainerCheck>
      <CheckSide 
        checkList={listLeft}
        title={t('homeCheckList.left.title')}
        text={t('homeCheckList.left.text')}
        buttonText={t('homeCheckList.left.buttonText')}
      >

      </CheckSide>
      <CheckSide 
        checkList={listRight} 
        variant={true}
        title={t('homeCheckList.right.title')}
        text={t('homeCheckList.right.text')}
        buttonText={t('homeCheckList.right.buttonText')}
      >

      </CheckSide>
    </ContainerCheck>
  )
}

export default HomeCheckList