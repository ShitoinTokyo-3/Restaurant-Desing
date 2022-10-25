import { useState } from "react"
import { createExample } from "../../../../redux/features/examples/actions";
import { ButtonCategories, ErrorCategory, FormCategory, InputCategories, SuccessCategory, TextareaCategories } from "../../../DashboardAdminCategories/components/styled-components/dashboardAdminCategory"

const ExampleForm = ({id, functionGetExamples}) => {

    const [errorBack, setErrorBack] = useState('');
    const [fineBack, setFineBack] = useState('');
    const [form , setForm] = useState({
        title: '',
        description: '',
        img: '',
        valid: null,
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setFineBack('');
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if(form.title === '' || form.description === '' || form.img === ''){
            setForm({
                ...form,
                valid: false
            })
        }else {
            setForm({
                ...form,
                valid: true
            })
            const obj = {
                title: form.title,
                description: form.description,
                img: form.img,
            }
            const res = await createExample(id,obj);
            if(res === 'Example created'){
                setForm({
                    title: '',
                    description: '',
                    img: '',
                })
                setFineBack('Example created');
                functionGetExamples(id);
            }else {
                setErrorBack(res);
            }
        }
    }
        
  return (
    <>
        <FormCategory
            onSubmit={handleOnSubmit}
        >
            <h2>Create Product Example</h2>

            <InputCategories
                type="text" 
                placeholder="Example title" 
                name="title"
                value={form.title}
                onChange={handleChange}
            />

            <TextareaCategories
                placeholder="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
            />

            <InputCategories
                type="text"
                placeholder="Image" 
                name="img"
                value={form.img}
                onChange={handleChange}
            />
            <ButtonCategories type='submit' value='Create' />
            {form.valid === false && <ErrorCategory>Complete all fields</ErrorCategory>}
            {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
            {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
        </FormCategory>
    </>
  )
}

export default ExampleForm