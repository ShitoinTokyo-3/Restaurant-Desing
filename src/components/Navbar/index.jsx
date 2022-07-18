import { useTranslation } from 'react-i18next';

function Navbar(){
    const { t } = useTranslation(['global']);
    return (
        <div>
            <span>{t('navbar')}</span>
        </div>    
    )
}

export default Navbar;