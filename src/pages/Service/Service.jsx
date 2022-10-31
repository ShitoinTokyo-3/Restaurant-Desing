import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { getCategoryByNames, getCategoryWithProducts } from "../../redux/features/categories/actions"
import { getProduct, getProductByNames } from "../../redux/features/products/actions"
import { getExamples, cleanExamples } from "../../redux/features/examples/actions"
import { BolderLetter, ContainerTextDescriptionServices } from "../../styled-components/Containers/Containers"
import ServicesBanner from "./components/ServicesBanner/ServicesBanner"
import ServicesModalColors from "./components/ServicesModalColors/ServicesModalColors"
import ServicesModalExamples from "./components/ServicesModalExamples/ServicesModalExamples"
import ServicesModalCategories from "./components/ServicesMoldalCategories/ServicesModalCategories"
import ServicesSteps from "./components/ServicesSteps/ServicesSteps"
import { ContainerProductExample, ContainerProductsExamples } from "./components/styled-components/select"
import Footer from "../../components/Footer/Footer"

const Service = () => {

  const params =useParams()
  const dispatch = useDispatch()

  const [notFound, setNotFound] = useState(false)

  const product = useSelector(state => state.products.actualProduct)
  const examples = useSelector(state => state.examples.examples)

  useEffect( () => {
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

  useEffect( () => {
    if(product.id){
      dispatch(getExamples(product.id))
    }
  }, [product])

  useEffect( () => {
    return () => {
      dispatch(cleanExamples())
    }
  }, [])

  if(notFound) return <Navigate to="*"/>

  const [modalFormCategories, setModalFormCategories] = useState(false);

  const [modalFormExamples, setModalFormExamples] = useState(false);

  const [modalFormColors, setModalFormColors] = useState(false);

  
  const setModalFormCategoriesFunction = () => {
    setModalFormCategories(false);
  }
  const setModalFormExamplesFunctionClose = () => {
    setModalFormExamples(false);
  }
  const setModalFormColorsFunctionClose = () => {
    setModalFormColors(false);
  }

  const handleOptionModalCategories = (category) => {
    setModalFormCategories(false);
    localStorage.setItem('categoryForm', category)
    setModalFormExamples(true)
  }

  const setModalFormExamplesFunction = (examples) => {
    setModalFormExamples(false);
    localStorage.setItem('examplesForm', JSON.stringify(examples))
    setModalFormColors(true)
  }

  const setModalFormColorsFunction = (colors) => {
    setModalFormColors(false);
    localStorage.setItem('colorsForm', JSON.stringify(colors))
  }

  console.log(product)

  return (
    <>
      <Navbar/>
        {product.name && <>
        <ServicesBanner functionUse={setModalFormCategories}/>
        <ServicesSteps functionUse={setModalFormCategories}/>
        <ContainerTextDescriptionServices>
          <div dangerouslySetInnerHTML={{__html: product.description}}></div>
        </ContainerTextDescriptionServices>
        {examples[0]?.name && <>
        
          <BolderLetter>
            {product.examplesDescription}
          </BolderLetter>
          <ContainerProductsExamples>
            {examples.map(example => {
              return( 
                <ContainerProductExample key={example.id}>
                  <img src={example.img} alt={example.name}/>
                  <h3>{example.name}</h3>
                  <p>{example.description}</p>
                </ContainerProductExample>
              )
            })}
          </ContainerProductsExamples>
        </>}

        <Footer/>

        <ServicesModalCategories 
          open={modalFormCategories} 
          functionUse={setModalFormCategoriesFunction}
          handleOptionModalCategories={handleOptionModalCategories}
        />
        <ServicesModalExamples
          open={modalFormExamples}
          functionUse={setModalFormExamplesFunctionClose}
          setModalFormExamplesFunction={setModalFormExamplesFunction}
        />

        <ServicesModalColors 
          open={modalFormColors}
          functionUse={setModalFormColorsFunctionClose}
          setModalFormColorsFunction={setModalFormColorsFunction}
        />
        </>}
    </>
  )
}

export default Service