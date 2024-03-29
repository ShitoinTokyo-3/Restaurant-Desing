import { useEffect } from "react"
import { useState } from "react"
import { FaWindowClose } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import ModalConfirmationDelete from "../../../../components/ModalConfirmationDelete/ModalConfirmationDelete"
import { getCategories } from "../../../../redux/features/categories/actions"
import { getExamples, deleteExample, cleanExamples } from "../../../../redux/features/examples/actions"
import { getProduct, getProducts } from "../../../../redux/features/products/actions"
import { WhiteContainer } from "../../../../styled-components/Containers/Containers"
import { ContainerProductsInExamples } from "../../../DashboardAdminCategories/components/styled-components/dashboardAdminCategory"
import { TextContainer } from "../../../DashboardAdminIntro/components/styled-components/textContainer"
import OptionsCategories from "../../../DashboardAdminProducts/components/OptionsCategories/OptionsCategories"
import ExampleForm from "../ExampleForm/ExampleForm"
import ExamplesTitles from "../ExampleTitles/ExamplesTitles"
import { DivProduct, DivProducts } from "../styled-components/ProductsExamples.styled"

const ProductsExamples = () => {

    const categories = useSelector(state => state.categories.categories)
    const actualCategory = useSelector(state => state.categories.actualCategory)
    const products = useSelector(state => state.products.products)
    const examples = useSelector(state => state.examples.examples)

    const [actualProduct, setActualProduct] = useState({})
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCategories())
        if(actualCategory.id){
            dispatch(getProducts(actualCategory.id))
        }
    }, [])
    
    const [ updateId, setUpdateId ] = useState();
    const [ createExamples, setCreateExamples ] = useState(false);

    const handleOnClick = (id, name) => {
        if(name !== 'There is no registered products'){
            setActualProduct({id, name})
            setUpdateId(id);
            dispatch(getProduct( actualCategory.id, id ));
            dispatch(getExamples(id));
            setCreateExamples(false);
            setTimeout(() => {
                setCreateExamples(true);
            }
            , 100);
        }
    }

    const [ updateIdExample, setUpdateIdExample ] = useState();
    const [ openModalConfirmationDelete, setOpenModalConfirmationDelete ] = useState(false);

    const setModalConfirmationDelete = () => {
        setOpenModalConfirmationDelete(false);
    }

    const handleDelete = (id) => {
        setUpdateIdExample(id);
        setOpenModalConfirmationDelete(true);
    }

    const handleConfirmationDelete = () => {
        setCreateExamples(false);
        setOpenModalConfirmationDelete(false);
        deleteExample( actualProduct.id, updateIdExample );
        dispatch(cleanExamples());
        setTimeout(() => {
            dispatch(getExamples(actualProduct.id));
        }, 2000);
    }

    const handleGetExamples = (id) => {
        dispatch(cleanExamples());
        dispatch(getExamples(id));
    }

  return (
    <>
        { categories[0]?.name === 'There are no registered categories' ? 
            <WhiteContainer>
                <TextContainer>
                    <h1>There are no registered categories</h1>
                </TextContainer>
            </WhiteContainer>:
            (<WhiteContainer>
                <TextContainer>
                    <h1>Product Examples</h1>
                </TextContainer>
                {categories[0]?.name &&
                <OptionsCategories
                    listCategories={categories}
                    functionRestart={setCreateExamples}
                />}
                <ContainerProductsInExamples>
                    <strong>Click on a product to create examples</strong>
                    <DivProducts>
                        {products.length > 0 ?
                            <>
                                {products.map(product => (
                                    <DivProduct
                                        key={product.id}
                                        id={product.id}
                                    >
                                        <div 
                                            onClick={() => handleOnClick(product.id, product.name)}
                                        >
                                            <h2>{product.name}</h2>
                                            <span>{product.price}</span>
                                        </div>
                                    </DivProduct>
                                ))}
                            </>:
                            <DivProduct>
                                <h2>There are no registered products</h2>
                            </DivProduct>
                            }
                        </DivProducts>
                </ContainerProductsInExamples>
                    {createExamples && 
                        <>
                            <ExamplesTitles/>
                            <ExampleForm
                                id={updateId}
                                functionGetExamples={handleGetExamples}
                            />
                            {examples[0]?.name &&
                                <DivProducts>
                                    {examples.map(example => (
                                        <DivProduct
                                            key={example.id}
                                            id={example.id}
                                        >
                                            <div>
                                                <h2>{example.name}</h2>
                                            </div>
                                            <div 
                                                className='iconAdminCategories'
                                                onClick={() => handleDelete(example.id)}
                                            >
                                                <FaWindowClose fontSize={'20px'} />
                                            </div>
                                        </DivProduct>
                                    ))}
                                </DivProducts>
                            }
                        </>}
            </WhiteContainer>
        )}
        <ModalConfirmationDelete
            open={openModalConfirmationDelete}
            functionUse={setModalConfirmationDelete}
            entity={'product example'}
            functionToDelete={handleConfirmationDelete}
        />
    </>
  )
}

export default ProductsExamples