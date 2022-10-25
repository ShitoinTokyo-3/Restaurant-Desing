import { useEffect } from "react"
import { useState } from "react"
import { FaWindowClose } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../../../redux/features/categories/actions"
import { getExamples, deleteExample } from "../../../../redux/features/examples/actions"
import { getProduct, getProducts } from "../../../../redux/features/products/actions"
import { WhiteContainer } from "../../../../styled-components/Containers/Containers"
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
    const handleDelete = (id) => {
        deleteExample( actualProduct.id, id );
        setTimeout(() => {
            dispatch(getExamples(updateId));
        }, 100);
    }

    const handleGetExamples = (id) => {
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
    </>
  )
}

export default ProductsExamples