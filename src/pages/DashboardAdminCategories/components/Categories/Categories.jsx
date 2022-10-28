import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { WhiteContainer } from "../../../../styled-components/Containers/Containers";
import { TextContainer } from "../../../DashboardAdminIntro/components/styled-components/textContainer";
import FormCategories from "../FormCategories/FormCategories";
import { ContainerCategories, DivCategories, DivCategory } from "../styled-components/dashboardAdminCategory";
import { FaWindowClose } from "react-icons/fa";
//Redux
import { getCategories, getCategory, deleteCategory } from "../../../../redux/features/categories/actions";
import FormUpdateCategory from "../FormUpdateCategory/FormUpdateCategory";

const Categories = () => {
    const { t } = useTranslation(['dashboardAdmin']);
    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories.categories);

    const [ updateId, setUpdateId ] = useState();
    const [ update, setUpdate ] = useState(false);

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
            deleteCategory(id);
            setTimeout(() => {
                dispatch(getCategories());
            }, 100);
            }
    }

    return (
    <WhiteContainer>
        <TextContainer>
            <h1>{t('categories.title')}</h1>
            <p>{t('categories.text')}</p>
        </TextContainer>
        <ContainerCategories>
            <FormCategories/>
            <div>
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
        {update && 
            <FormUpdateCategory
                idCategory={updateId}
            />
        }
    </WhiteContainer>
  )
}

export default Categories