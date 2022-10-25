import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory, getCategories, getCategory } from "../../../../redux/features/categories/actions";
import { ButtonCategories, ErrorCategory, FormCategory, InputCategories, SuccessCategory, TextareaCategories } from "../styled-components/dashboardAdminCategory";

const FormUpdateCategory = ({ idCategory }) => {

    const { id, name, description, img, backgroundColor, color } = useSelector(state => state.categories.actualCategory);

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: name,
        description: description,
        img: img,
        backgroundColor: backgroundColor,
        color: color,
    });


    const [readyUpdate, setReadyUpdate] = useState(false);

    const [validForm, setValidForm] = useState(null);

    const [errorBack, setErrorBack] = useState('');

    const [fineBack, setFineBack] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setFineBack('');
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setReadyUpdate(!readyUpdate);

        const name = e.target.name.value;
        const description = e.target.description.value;
        const img = e.target.img.value;
        const backgroundColor = e.target.backgroundColor.value;
        const color = e.target.color.value;

        if(name === '' || description === '' || img === ''){
            setValidForm(false);
        }else if( readyUpdate){

            const obj = {
                id: idCategory,
                name: name,
                description: description,
                img: img,
                backgroundColor: backgroundColor,
                color: color,
            }
            const res = await updateCategory(obj);
            if(res === 'Category updated') {
                dispatch(getCategories());
                dispatch(getCategory(idCategory));
                setValidForm(null);
                setErrorBack('');
                setFineBack(res);
            }else {
                setValidForm(null);
                setErrorBack(res);
                setFineBack('');
            }
        }
    }

    useEffect(() => {
        dispatch(getCategory(id));
    }, [ dispatch,]);
  return (
        <FormCategory onSubmit={handleOnSubmit}>
            <h2>Update Category</h2>
            <label htmlFor="name">Category name</label>
            <InputCategories 
                type="text" 
                name="name" 
                value={form.name}
                onChange={handleChange}
                disabled={!readyUpdate}
            />
            <label htmlFor="description">Description</label>
            <TextareaCategories 
                type="text" 
                name="description" 
                value={form.description}
                onChange={handleChange}
                disabled={!readyUpdate}
            />
            <label htmlFor="img">Imagen URL</label>
            <InputCategories 
                type="text" 
                name="img" 
                value={form.img}
                onChange={handleChange}
                disabled={!readyUpdate}
            />
            <label htmlFor="backgroundColor">Background Color</label>
            <InputCategories
                type="text"
                name="backgroundColor"
                value={form.backgroundColor}
                onChange={handleChange}
                disabled={!readyUpdate}
            />
            <label htmlFor="color">Color</label>
            <InputCategories
                type="text"
                name="color"
                value={form.color}
                onChange={handleChange}
                disabled={!readyUpdate}
            />
            <ButtonCategories 
                type="submit" 
                value={readyUpdate ? 'Update' : 'Click to update'}
            />

            {validForm === false && <ErrorCategory>Complete all fields</ErrorCategory>}
            {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
            {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
        </FormCategory>
  )
}

export default FormUpdateCategory