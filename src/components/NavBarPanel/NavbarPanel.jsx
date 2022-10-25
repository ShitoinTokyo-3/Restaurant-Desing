import { useTranslation } from "react-i18next";
import {
    ContainerNavbarPanel,
    NavbarPanelLink,
    NavbarPanelLinkContainer
} from "./styled-components/container"

const NavbarPanel = () => {
    const { t } = useTranslation(['navbar']);

  return (
    <ContainerNavbarPanel>
        <NavbarPanelLinkContainer>
            <NavbarPanelLink to="/dashboard-admin/intro" >
                {t('admin.opcion1')}
            </NavbarPanelLink>
        </NavbarPanelLinkContainer>
        <NavbarPanelLinkContainer>
            <NavbarPanelLink to="/dashboard-admin/categories" >
                {t('admin.opcion2')} 
            </NavbarPanelLink>
        </NavbarPanelLinkContainer>
        <NavbarPanelLinkContainer>
            <NavbarPanelLink to="/dashboard-admin/products" >
                {t('admin.opcion3')}
            </NavbarPanelLink>
        </NavbarPanelLinkContainer>
        <NavbarPanelLinkContainer>
            <NavbarPanelLink to="/dashboard-admin/productsExamples" >
                {t('admin.opcion4')}
            </NavbarPanelLink>
        </NavbarPanelLinkContainer>
        <NavbarPanelLinkContainer>
            <NavbarPanelLink to="/dashboard-admin/orders">
                {t('admin.opcion5')}
            </NavbarPanelLink>
        </NavbarPanelLinkContainer>
    </ContainerNavbarPanel>
  )
}

export default NavbarPanel