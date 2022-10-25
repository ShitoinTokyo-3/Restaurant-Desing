import { useState } from "react"
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { createCategory, getCategories } from "../../../../redux/features/categories/actions";
import { ButtonCategories, ErrorCategory, FormCategory, InputCategories, SuccessCategory, TextareaCategories } from "../styled-components/dashboardAdminCategory";

const FormCategories = () => {
    
    const { t } = useTranslation(['dashboardAdmin']);
    
    const dispatch = useDispatch();
     
    const [errorBack, setErrorBack] = useState('');

    const [fineBack, setFineBack] = useState('');
    
    const [category , setCategory] = useState({
        name: '',
        description: '',
        img: '',
        backgroundColor: '',
        color: '',
        valid: null,
    });

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        })
        setFineBack('');
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if(category.name === '' || category.description === '' || category.img === '' || category.backgroundColor === '' || category.color === ''){
            setCategory({
                ...category,
                valid: false
            })
        }else {
            setCategory({
                ...category,
                valid: true
            })
            const obj = {
                name: category.name,
                description: category.description,
                img: category.img,
                backgroundColor: category.backgroundColor,
                color: category.color,
            }
            const res = await createCategory(obj);
            if(res === 'Category created') {
                dispatch(getCategories());
                setCategory({
                    name: '',
                    description: '',
                    img: '',
                    backgroundColor: '',
                    color: '',
                    valid: null,
                })
                setErrorBack('');
                setFineBack(res);
            }else {
                setErrorBack(res);
                setFineBack('');
            }
        }
    }

  return (
        <FormCategory onSubmit={handleOnSubmit}>
            <h2>{t('categories.add')}</h2>

            <InputCategories
                type="text" 
                placeholder="Category Name" 
                name="name"
                value={category.name}
                onChange={handleChange}
                />
            <TextareaCategories 
                placeholder="Description"
                name="description"
                value={category.description}
                onChange={handleChange}
                />
            <InputCategories 
                type="text" 
                placeholder="Image URL" 
                name="img"
                value={category.img}
                onChange={handleChange}
            />
            <InputCategories
                type="text"
                placeholder="Background Color"
                name="backgroundColor"
                value={category.backgroundColor}
                onChange={handleChange}
            />
            <InputCategories
                type="text"
                placeholder="Color"
                name="color"
                value={category.color}
                onChange={handleChange}
            />
            <ButtonCategories type="submit" value='Create Category' />
            {category.valid === false && <ErrorCategory>Complete all fields</ErrorCategory>}
            {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
            {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
        </FormCategory>
  )
}

export default FormCategories