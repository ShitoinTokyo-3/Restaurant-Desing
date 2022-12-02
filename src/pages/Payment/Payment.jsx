import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import ErrorInput from "../../components/ErrorInput/ErrorInput"
import Footer from "../../components/Footer/Footer"
import GoodMesage from "../../components/GoodMessage/GoodMesage"
import Loading from "../../components/Loading/Loading"
import ModalLogin from "../../components/ModalLogin/ModalLogin"
import Navbar from "../../components/Navbar/Navbar"
import { getCategoryByNames } from "../../redux/features/categories/actions"
import {  getProductByNames } from "../../redux/features/products/actions"
import { emailToMe } from "../../services/Emailjs/emailjs"
import { ModalPayment } from "../../utilities/ModalesPayment/ModalesPayment"
import { InputSubmit } from "../Home/components/HomeForm/components/Form/styled-components/Form.element"
import { ContainerFormPay, Form } from "./styled-components/formPayment"

const Payment = () => {
    const params =useParams()
    const dispatch = useDispatch()
  
    const [notFound, setNotFound] = useState(false)
    const [notFoundInfo, setNotFoundInfo] = useState(false)
  
    const product = useSelector(state => state.products.actualProduct)
  
    useEffect( () => {
        const colorForm = localStorage.getItem('colorsForm')
        const examplesForm = localStorage.getItem('examplesForm')
        const categoryForm = localStorage.getItem('categoryForm')

        if(!colorForm || !examplesForm || !categoryForm) setNotFoundInfo(true);

      async function fetchData() {
        let res = await getCategoryByNames(params.category)
        if(res === 'There is no registered categories with that name'){
          setNotFound(true)
        }else{
          setNotFound(false)
          dispatch(getProductByNames(res.id, params.product))
        }
      }
      fetchData()
    }, [])
  
    if(notFound) return <Navigate to="*"/>
    if(notFoundInfo) return <Navigate to={`/services/${params.category}/${params.product}`}/>

    const [form, setForm] = useState({
        name: '',
        brand: '',
        slogan: '',
        reaction: '',
        email: '',
        phone: ''
    });

    const [validForm, setValidForm] = useState({
        name: null,
        brand: null,
        slogan: null,
        reaction: null,
        email: null,
        phone: null,
        form: null
    });


    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value, form: null})
        if(value.length > 0){
            setValidForm({...validForm, [name]: true})
        }
    }

    const handleOnBlur = ({target: {name, value}}) => {
        if(!value){
            setValidForm({...validForm, [name]: false})
        }else{
            setValidForm({...validForm, [name]: true})
        }
    }


    const handleOnSubmit = async (e) => {
      e.preventDefault();

      if(validForm.name 
        && validForm.brand 
        && validForm.slogan 
        && validForm.reaction 
        && validForm.email 
        && validForm.phone){
          const {name, brand, slogan, reaction, email, phone} = e.target.elements;
          const categoryForm = localStorage.getItem('categoryForm');
          const colorForm = localStorage.getItem('colorsForm');
          const examplesForm = localStorage.getItem('examplesForm');
          const data = {
              order: `Services ${params.category}/${params.product}`,
              name: name.value,
              email: email.value,
              phone: phone.value,
              product: product.name,
              brand: brand.value,
              slogan: slogan.value,
              reaction: reaction.value,
              category: categoryForm,
              examples:`{
                ${JSON.parse(examplesForm).map((e) =>{
                      return `|| Example ${e.name} with id ${e.id}. Image URL: ${e.img} ||`
                  })}
              }`,
              colors: colorForm
          }
          emailToMe(data)
          ModalPayment(product.link,'_complete')
          setForm({
              name: '',
              brand: '',
              slogan: '',
              reaction: '',
              email: '',
              phone: ''
          });
          setValidForm({
              name: null,
              brand: null,
              slogan: null,
              reaction: null,
              email: null,
              phone: null,
              form: true
          });
        }else{
          setValidForm({...validForm, form: false})
        }
  }

  const [modal, setModal] = useState(false);

  const setModalFunction = () => {
      setModal(false);
  }
 
  if(product === null) return <Loading/>

  return (
    <>
      <Navbar modalOpen={modal} setModal={setModal}/>
      <ContainerFormPay
      >
        <h1>One more step to complete your order...</h1>
        <p>A little more information and we'll get to work on your design</p>
        <Form
          onSubmit={handleOnSubmit}   
        >
            <label htmlFor="name">What is your restaurant/food brand name?</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="i.e: Food Services LLC"
                value={form.name}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            {validForm.name === false && <ErrorInput >This field is required</ErrorInput>}
            <label htmlFor="brand">What is the brand name you want to use?</label>
            <input 
                type="text" 
                name="brand" 
                id="brand" 
                placeholder="i.e: Flair Burguer Joint"
                value={form.brand}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            {validForm.brand === false && <ErrorInput >This field is required</ErrorInput>}
            <label htmlFor="slogan">Slogan (if available)</label>
            <input 
                type="text" 
                name="slogan" 
                id="slogan" 
                placeholder="i.e.: Burgers made right"
                value={form.slogan}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            {validForm.slogan === false && <ErrorInput >This field is required</ErrorInput>}
            <label htmlFor="reaction">What reaction would you like your design to provoke?</label>
            <input 
                type="text" 
                name="reaction" 
                id="reaction" 
                placeholder="i.e.: I would like it to provoke confidence on our kitchen"
                value={form.reaction}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            {validForm.reaction === false && <ErrorInput >This field is required</ErrorInput>}
            <label htmlFor="email">What is your email?</label>
            <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder="restaurantdesignbar@gmail.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            {validForm.email === false && <ErrorInput >This field is required</ErrorInput>}
            <label htmlFor="phone">What is your phone number?</label>
            <input
                type="text"
                name="phone"
                id="phone"
                placeholder="i.e: 555-555-5555"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            {validForm.phone === false && <ErrorInput >This field is required</ErrorInput>}
            <InputSubmit type="submit" value="Continue"/>
            {validForm.form === false && <ErrorInput >Please fill all the fields</ErrorInput>}
            {validForm.form === true && <GoodMesage registerButton >Your order has been sent successfully</GoodMesage>}
        </Form>
      </ContainerFormPay>

      <ModalLogin
          open={modal}
          functionUse={setModalFunction}
          openModal={setModal}
        />
      <Footer/>
    </>
  )
}

export default Payment