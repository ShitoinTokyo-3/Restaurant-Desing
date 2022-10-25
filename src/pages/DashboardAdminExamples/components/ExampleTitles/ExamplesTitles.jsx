import { useState } from "react";
import { useSelector } from "react-redux";
import { createExamplesDescription } from "../../../../redux/features/products/actions";
import { ButtonCategories, ErrorCategory, FormCategory, InputCategories, SuccessCategory } from "../../../DashboardAdminCategories/components/styled-components/dashboardAdminCategory"

const ExamplesTitles = () => {

    const actualCategory = useSelector(state => state.categories.actualCategory)
    const actualProduct = useSelector(state => state.products.actualProduct);

    const [title, setTitle] = useState(actualProduct.examplesDescription ? 
        actualProduct.examplesDescription : 
        '');
    const [validForm, setValidForm] = useState(null);
    const [errorBack, setErrorBack] = useState('');
    const [fineBack, setFineBack] = useState('');


    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if(title === ''){
            setValidForm(false);
        }else {
            setValidForm(true);
            const res = await createExamplesDescription(actualCategory.id, actualProduct.id, title);
            if(res === 'Description created'){
                setFineBack('Examples description created');
                setErrorBack('');
            }else {
                setErrorBack(res);
                setFineBack(''); 
            }
        }
        
    }

  return (
    <>
        <FormCategory
            onSubmit={handleOnSubmit}
        >
            <h2>Title Product Example</h2>

            <InputCategories
                type="text" 
                placeholder="Title examples" 
                name="name"
                value={title}
                onChange={handleChange}
            />
            <ButtonCategories type='submit' value='Create'/>
            {validForm === false && <ErrorCategory>Complete field</ErrorCategory>}
            {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
            {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
        </FormCategory>
    </>
  )
}

export default ExamplesTitles;