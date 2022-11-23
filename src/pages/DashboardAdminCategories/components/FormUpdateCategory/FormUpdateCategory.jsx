import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch } from "react-redux";
import { updateCategory, getCategories } from "../../../../redux/features/categories/actions";
import { useGetCategoriesQuery } from "../../../../redux/restApi";
import { ButtonCategories, ContainerInputsColors, ErrorCategory, FormCategory, InputCategories, InputColorCategories, SuccessCategory, TextareaCategories } from "../styled-components/dashboardAdminCategory";

const FormUpdateCategory = ({ idCategory }) => {
    
    const { data, status } = useGetCategoriesQuery(idCategory);
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: '',
        description: '',
        img: '',
        backgroundColor: '',
        displayBackgroundColorPicker: '',
        color: '',
        displayColorPicker: '',
    });
    useEffect(() => {
        if( status === 'fulfilled' ){
            setForm({
                name: data?.name,
                description: data?.description,
                img: data?.img,
                backgroundColor: data?.backgroundColor, 
                displayBackgroundColorPicker: data?.false,
                color: data?.color,
                displayColorPicker: data?.false,
            });
        }
    }, [data]);

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
        const backgroundColor = form.backgroundColor;
        const color = form.color;

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
                useGetCategoriesQuery(idCategory);
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

    ///Manejadores de Colores///

    const handleOpenBackgroundColorPicker = () => {
        if(readyUpdate){
            setForm({
                ...form,
                displayBackgroundColorPicker: !form.displayBackgroundColorPicker,
            })
        }
    }

    const handleCloseBackgroundColorPicker = () => {
        setForm({
            ...form,
            displayBackgroundColorPicker: false,
        })
    }

    const handleChangeBackgroundColorPicker = (color) => {
        setForm({
            ...form,
            backgroundColor: color.hex
        })
    }

    ///Manejadores de Colores de letra///

    const handleOpenColorPicker = () => {
        if(readyUpdate){
            setForm({
                ...form,
                displayColorPicker: !form.displayColorPicker,
            })
        }
    }

    const handleCloseColorPicker = () => {
        setForm({
            ...form,
            displayColorPicker: false,
        })
    }

    const handleChangeColorPicker = (color) => {
        setForm({
            ...form,
            color: color.hex
        })
    }

    ///Manejadores de Colores///
  return (
    <>
        {data?.name && (
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
                <ContainerInputsColors>
                    <InputColorCategories>
                        <label htmlFor="backgroundColor">Background Color</label>
                        <div
                            id="backgroundColor"
                            style={{backgroundColor: form.backgroundColor}}
                            onClick={handleOpenBackgroundColorPicker}
                        >
                        </div>
                        {form.displayBackgroundColorPicker ? 
                            <div
                                id="popover"
                            >
                                <div
                                    id="cover"
                                    onClick={handleCloseBackgroundColorPicker}
                                />
                                <ChromePicker
                                    color={form.backgroundColor}
                                    onChange={handleChangeBackgroundColorPicker}
                                />
                            </div>
                        : null}
                    </InputColorCategories>

                    <InputColorCategories>
                        <label htmlFor="backgroundColor">Font Color</label>
                        <div
                            id="backgroundColor"
                            style={{backgroundColor: form.color}}
                            onClick={handleOpenColorPicker}
                        >
                        </div>
                        {form.displayColorPicker ? 
                            <div
                                id="popover"
                            >
                                <div
                                    id="cover"
                                    onClick={handleCloseColorPicker}
                                />
                                <ChromePicker
                                    color={form.color}
                                    onChange={handleChangeColorPicker}
                                />
                            </div>
                        : null}
                    </InputColorCategories>
                </ContainerInputsColors>
                <ButtonCategories 
                    type="submit" 
                    value={readyUpdate ? 'Update' : 'Click to update'}
                />

                {validForm === false && <ErrorCategory>Complete all fields</ErrorCategory>}
                {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
                {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
            </FormCategory>

        )}
    </>
  )
}

export default FormUpdateCategory