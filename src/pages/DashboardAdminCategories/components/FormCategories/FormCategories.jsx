import { useState } from "react"
import { useDispatch } from "react-redux";
import { ChromePicker } from 'react-color';
import { useTranslation } from "react-i18next";
import { cleanCategories, createCategory, getCategories } from "../../../../redux/features/categories/actions";
import { ButtonCategories, ContainerInputsColors, ErrorCategory, ExampleCategorie, FormCategory, InputCategories, InputColorCategories, SuccessCategory, TextareaCategories } from "../styled-components/dashboardAdminCategory";

const FormCategories = () => {
    
    const { t } = useTranslation(['dashboardAdmin']);
    
    const dispatch = useDispatch();
     
    const [errorBack, setErrorBack] = useState('');

    const [fineBack, setFineBack] = useState('');

    //States del formulario///
    
    const [category , setCategory] = useState({
        name: '',
        description: '',
        img: '',
        backgroundColor: '#D51313',
        displayBackgroundColorPicker: false,
        color: '#ffffff',
        displayColorPicker: false,
        valid: null,
    });

    //States del formulario///

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
                dispatch(cleanCategories());
                dispatch(getCategories());
                setCategory({
                    name: '',
                    description: '',
                    img: '',
                    backgroundColor: '#D51313',
                    displayBackgroundColorPicker: false,
                    color: '#ffffff',
                    displayColorPicker: false,
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

        ///Manejadores de Colores///

        const handleOpenBackgroundColorPicker = () => {
            setCategory({
                ...category,
                displayBackgroundColorPicker: !category.displayBackgroundColorPicker,
            })
        }
    
        const handleCloseBackgroundColorPicker = () => {
            setCategory({
                ...category,
                displayBackgroundColorPicker: false,
            })
        }
    
        const handleChangeBackgroundColorPicker = (color) => {
            setCategory({
                ...category,
                backgroundColor: color.hex
            })
        }

        ///Manejadores de Colores de letra///

        const handleOpenColorPicker = () => {
            setCategory({
                ...category,
                displayColorPicker: !category.displayColorPicker,
            })
        }
    
        const handleCloseColorPicker = () => {
            setCategory({
                ...category,
                displayColorPicker: false,
            })
        }
    
        const handleChangeColorPicker = (color) => {
            setCategory({
                ...category,
                color: color.hex
            })
        }
    
        ///Manejadores de Colores///


  return (
    <>
        <ExampleCategorie>
            <img 
                src={category.img? 
                    category.img : 
                    'https://res.cloudinary.com/daqumb8mh/image/upload/v1665585806/Images%20of%20carousel%20%28Categories%29/Social_Media_w131ru.jpg'} 
                alt="image not found"
                id="slide__img"
                />
            <div 
                id="slide__text"
                style={{backgroundColor: category.backgroundColor, color: category.color}}
            >
            <span
                id="slide__text__title"
            >
                {category.name? category.name : 'Social Media'}
            </span>
            <p>
                {category.description? category.description :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
            </p>

            <span
                id="slide__text__link"
            >Click here to see</span>

            </div>
        </ExampleCategorie>
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

            <strong>Click on the color to change it</strong>
            <ContainerInputsColors>
                <InputColorCategories>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <div
                        id="backgroundColor"
                        style={{backgroundColor: category.backgroundColor}}
                        onClick={handleOpenBackgroundColorPicker}
                    >
                    </div>
                    {category.displayBackgroundColorPicker ? 
                        <div
                            id="popover"
                        >
                            <div
                                id="cover"
                                onClick={handleCloseBackgroundColorPicker}
                            />
                            <ChromePicker
                                color={category.backgroundColor}
                                onChange={handleChangeBackgroundColorPicker}
                            />
                        </div>
                    : null}
                </InputColorCategories>

                <InputColorCategories>
                    <label htmlFor="backgroundColor">Font Color</label>
                    <div
                        id="backgroundColor"
                        style={{backgroundColor: category.color}}
                        onClick={handleOpenColorPicker}
                    >
                    </div>
                    {category.displayColorPicker ? 
                        <div
                            id="popover"
                        >
                            <div
                                id="cover"
                                onClick={handleCloseColorPicker}
                            />
                            <ChromePicker
                                color={category.color}
                                onChange={handleChangeColorPicker}
                            />
                        </div>
                    : null}
                </InputColorCategories>
            </ContainerInputsColors>
            <ButtonCategories type="submit" value='Create Category' />
            {category.valid === false && <ErrorCategory>Complete all fields</ErrorCategory>}
            {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
            {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
        </FormCategory>
    </>
  )
}

export default FormCategories