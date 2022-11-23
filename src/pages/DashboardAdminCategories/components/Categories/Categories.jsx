import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { WhiteContainer } from "../../../../styled-components/Containers/Containers";
import { TextContainer } from "../../../DashboardAdminIntro/components/styled-components/textContainer";
import FormCategories from "../FormCategories/FormCategories";
import { ContainerCategories, DivCategories, DivCategory } from "../styled-components/dashboardAdminCategory";
import { FaWindowClose } from "react-icons/fa";
//Redux
import { getCategories, cleanCategories, getCategory, deleteCategory } from "../../../../redux/features/categories/actions";
import FormUpdateCategory from "../FormUpdateCategory/FormUpdateCategory";
import ModalConfirmationDelete from "../../../../components/ModalConfirmationDelete/ModalConfirmationDelete";

const Categories = () => {
    const { t } = useTranslation(['dashboardAdmin']);
    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories.categories);

    const [ updateId, setUpdateId ] = useState();
    const [ update, setUpdate ] = useState(false);

    const [ openModalConfirmationDelete, setOpenModalConfirmationDelete ] = useState(false);

    const setModalConfirmationDelete = () => {
        setOpenModalConfirmationDelete(false);
    }

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleOnClick = (id, name) => {
        if(name !== 'There are no registered categories'){
            setUpdateId(id);
            dispatch(getCategory(id));
            setUpdate(false);
            setTimeout(() => {
                setUpdate(true);
            }
            , 100);
        }
    }

    const handleDelete = (id, name) => {
        if(name !== 'There are no registered categories'){
            setUpdateId(id);
            setOpenModalConfirmationDelete(true);
        }
    }

    const handleConfirmationDelete = () => {
        setUpdate(false);
        setOpenModalConfirmationDelete(false);
        deleteCategory(updateId);
        dispatch(cleanCategories());      
        setTimeout(() => {
            dispatch(getCategories());
        }, 2000);
    }

    return (
    <>
        <WhiteContainer>
            <TextContainer>
                <h1>{t('categories.title')}</h1>
                <p>{t('categories.text')}</p>
            </TextContainer>
            <ContainerCategories>
                <div  style={{width: '100%'}}>
                    <FormCategories/>
                </div>
                <div style={{marginTop: '464px'}}>
                    <strong>Click on a category to update it</strong>
                    <DivCategories>
                        {categories.map(category => (
                            <DivCategory 
                                key={category.id} 
                                id={category.id}
                            >
                            <div onClick={() => handleOnClick(category.id, category.name)}>
                                <h2>{category.name}</h2>
                                <span>{category.price}</span>
                            </div>
                            <div 
                                className='iconAdminCategories'
                                onClick={() => handleDelete(category.id, category.name)}
                            >
                                <FaWindowClose fontSize={'20px'} />
                            </div>
                            </DivCategory>
                        ))}
                    </DivCategories>
                </div>

            </ContainerCategories>
            {update && updateId &&
                <FormUpdateCategory
                    idCategory={updateId}
                />
            }
        </WhiteContainer>
        <ModalConfirmationDelete
            open={openModalConfirmationDelete}
            functionUse={setModalConfirmationDelete}
            entity={'category'}
            functionToDelete={handleConfirmationDelete}
        />
    </>
  )
}

export default Categories