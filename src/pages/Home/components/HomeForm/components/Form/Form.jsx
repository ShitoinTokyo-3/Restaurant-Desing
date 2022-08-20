import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { 
    FormArea, 
    FormInput, 
    FormInputsContainer, 
    TermsAndConditions,
    InputSubmit,
    FormInputModal,
    FormAreaModal,
    InputSubmitModal,
    TermsAndConditionsModal,
    FormInputSecondContainer
} from "./styled-components/Form.element"
import ErrorInput from '../../../../../../components/ErrorInput/ErrorInput';

const Form = ({setOpenModal, isModal}) => {

    const formRef = useRef();

    const regularExpression = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/
    }

    const [form, setForm] = useState({
        name: '',
        validname: null,
        email: '',
        validemail: null,
        phone:'',
        validphone: null,
        message: ''
    });

    const handleName = ({target: { name, value }}) => {        
        if (regularExpression[name].test(value)) {
            setForm({ ...form,
                [name]: value.trim().toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
                [`valid${name}`]: true })
        } else {
            setForm({ ...form, [`valid${name}`]: false })
        }
    }

    const handleChange = ({target: { name, value }}) => {
        setForm({ ...form, [name]: value })

        if(regularExpression[name]?.test(value)){
            setForm({ ...form, [name]: value, [`valid${name}`]: true })
        }
    }
    
    const handleBlurInput = ({target: { name, value }}) => {
        if (regularExpression[name].test(value)) {
            setForm({ ...form, [`valid${name}`]: true })
        } else {
            setForm({ ...form, [`valid${name}`]: false })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.validname && form.validemail && form.validphone) {
            //TODO: Send email to client
            emailjs.sendForm('service_kq6dweb', 'template_mhhe01q', formRef.current, '3r_Z1z9M02a-v6kYV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            //TODO: Send email to our email
            emailjs.sendForm('service_kq6dweb', 'template_o3alus2', formRef.current, '3r_Z1z9M02a-v6kYV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setForm({
                name: '',
                validname: null,
                email: '',
                validemail: null,
                phone:'',
                validphone: null,
                message: ''
            })
            if(isModal) setOpenModal('ModalCheckEmail')
            else setOpenModal(true)
            
        }
    }

  return (
    <>
        { !isModal ?
        <FormInputsContainer ref={formRef} onSubmit={handleSubmit}>
            <FormInputSecondContainer>
                <FormInput
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleName}
                />
                {form.validname === false && <ErrorInput>Only letters and spaces</ErrorInput>}
            </FormInputSecondContainer>
            
            <FormInputSecondContainer>
                <FormInput
                    type="text"
                    placeholder="Email"
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validemail === false && <ErrorInput>Please enter a valid email</ErrorInput>}
                
            </FormInputSecondContainer>

            <FormInputSecondContainer>
                <FormInput
                    type='text'
                    placeholder="Phone"
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validphone === false && <ErrorInput>Please enter a valid phone</ErrorInput>}
            </FormInputSecondContainer>
            <FormInputSecondContainer>
                <FormArea
                    placeholder="I need help with..."
                    autoComplete="on"
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                />
            </FormInputSecondContainer>
            <InputSubmit type='submit' value='Send information'/>
            <TermsAndConditions>
                All Rights Reserved <span>Restaurant Design Bar</span><br/>
                <span>Terms and Conditions</span>
            </TermsAndConditions>
        </FormInputsContainer> : 
        <FormInputsContainer ref={formRef} onSubmit={handleSubmit}>
            <div>
                <FormInputModal
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleName}
                />
                {form.validname === false && <ErrorInput>Only letters and spaces</ErrorInput>}
            </div>
                        
            <div>
                <FormInputModal
                    type="text"
                    placeholder="Email"
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validemail === false && <ErrorInput>Please enter a valid email</ErrorInput>}
                
            </div>

            <div>
                <FormInputModal
                    type='text'
                    placeholder="Phone"
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validphone === false && <ErrorInput>Please enter a valid phone</ErrorInput>}
            </div>
            <FormAreaModal
                placeholder="I need help with..."
                autoComplete="on"
                name='message'
                value={form.message}
                onChange={handleChange}
            />
            <InputSubmitModal type='submit' value='Send information'/>
            <TermsAndConditionsModal>
                All Rights Reserved <span>Restaurant Design Bar</span><br/>
                <span>Terms and Conditions</span>
            </TermsAndConditionsModal>
        </FormInputsContainer>
        }

    </>

  )
}
export default Form;