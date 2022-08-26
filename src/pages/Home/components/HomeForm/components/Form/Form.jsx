import { useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
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

    const { t } = useTranslation(['home']);

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
            
        }else if(!form.validname && !form.validemail && !form.validphone){
            setForm({...form, validname: false, validemail: false, validphone: false, })
        }else if(!form.validname && !form.validemail && form.validphone){
            setForm({...form, validname: false, validemail: false })
        }else if(!form.validname && form.validemail && !form.validphone){
            setForm({...form, validname: false, validphone: false })
        }else if(form.validname && !form.validemail && !form.validphone){
            setForm({...form, validemail: false, validphone: false })
        }else if(!form.validname && form.validemail && form.validphone){
            setForm({...form, validname: false })
        }else if(form.validname && !form.validemail && form.validphone){
            setForm({...form, validemail: false })
        }else if(form.validname && form.validemail && !form.validphone){
            setForm({...form, validphone: false, })
        }
    }

  return (
    <>
        { !isModal ?
        <FormInputsContainer ref={formRef} onSubmit={handleSubmit}>
            <FormInputSecondContainer>
                <FormInput
                    type="text"
                    placeholder={t('form.placeholder1')}
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleName}
                />
                {form.validname === false && <ErrorInput>{t('form.errorInput1')}</ErrorInput>}
            </FormInputSecondContainer>
            
            <FormInputSecondContainer>
                <FormInput
                    type="text"
                    placeholder={t('form.placeholder2')}
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validemail === false && <ErrorInput>{t('form.errorInput2')}</ErrorInput>}
                
            </FormInputSecondContainer>

            <FormInputSecondContainer>
                <FormInput
                    type='text'
                    placeholder={t('form.placeholder3')}
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validphone === false && <ErrorInput>{t('form.errorInput3')}</ErrorInput>}
            </FormInputSecondContainer>
            <FormInputSecondContainer>
                <FormArea
                    placeholder={t('form.placeholder4')}
                    autoComplete="on"
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                />
            </FormInputSecondContainer>
            <InputSubmit type='submit' value={t('form.buttonForm')}/>
            <TermsAndConditions>
                {t('form.termsAndConditions1')}<span>{t('form.termsAndConditions2')}</span><br/>
                <span>{t('form.termsAndConditions3')}</span>
            </TermsAndConditions>
        </FormInputsContainer> : 
        <FormInputsContainer ref={formRef} onSubmit={handleSubmit}>
            <div>
                <FormInputModal
                    type="text"
                    placeholder={t('formModal.placeholder1')}
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleName}
                />
                {form.validname === false && <ErrorInput>{t('formModal.errorInput1')}</ErrorInput>}
            </div>
                        
            <div>
                <FormInputModal
                    type="text"
                    placeholder={t('formModal.placeholder2')}
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validemail === false && <ErrorInput>{t('formModal.errorInput2')}</ErrorInput>}
                
            </div>

            <div>
                <FormInputModal
                    type='text'
                    placeholder={t('formModal.placeholder3')}
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                />
                {form.validphone === false && <ErrorInput>{t('formModal.errorInput3')}</ErrorInput>}
            </div>
            <FormAreaModal
                placeholder={t('formModal.placeholder4')}
                autoComplete="on"
                name='message'
                value={form.message}
                onChange={handleChange}
            />
            <InputSubmitModal type='submit' value={t('formModal.buttonForm')}/>
            <TermsAndConditionsModal>
                {t('formModal.termsAndConditions1')}<span>{t('formModal.termsAndConditions2')}</span><br/>
                <span>{t('formModal.termsAndConditions3')}</span>
            </TermsAndConditionsModal>
        </FormInputsContainer>
        }

    </>

  )
}
export default Form;