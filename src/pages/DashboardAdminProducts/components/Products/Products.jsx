//Node Modules
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
//Styled-Components
import { WhiteContainer } from "../../../../styled-components/Containers/Containers"
import { TextContainer } from "../../../DashboardAdminIntro/components/styled-components/textContainer"
import { ContainerCategories, DivCategory, DivCategories } from "../../../DashboardAdminCategories/components/styled-components/dashboardAdminCategory"
//Icons
import { FaWindowClose } from "react-icons/fa"
//Components
import FormProducts from "../FormProducts/FormProducts"
import FormUpdateProduct from "../FormUpdateProduct/FormUpdateProduct"
import OptionsCategories from "../OptionsCategories/OptionsCategories"
//Redux
import { getCategories } from "../../../../redux/features/categories/actions"
import { deleteProduct, getProducts, getProduct } from "../../../../redux/features/products/actions"

const Products = () => {

    const categories = useSelector(state => state.categories.categories)
    const actualCategory = useSelector(state => state.categories.actualCategory)
    const products = useSelector(state => state.products.products)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
        if(actualCategory.id){
            dispatch(getProducts(actualCategory.id))
        }
    }, [])

    const [ updateId, setUpdateId ] = useState();
    const [ update, setUpdate ] = useState(false);

    const handleOnClick = (id, name) => {
        if(name !== 'There is no registered categories'){
            setUpdateId(id);
            dispatch(getProduct( actualCategory.id, id ));
            setUpdate(false);
            setTimeout(() => {
                setUpdate(true);
            }
            , 100);
        }
    }

    const handleDelete = (id) => {
        deleteProduct( actualCategory.id, id );
        setTimeout(() => {
            dispatch(getProducts(actualCategory.id));
        }, 100);
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
                    <h1>Products</h1>
                </TextContainer>
                {categories[0]?.name &&
                <OptionsCategories 
                    listCategories={categories}
                    functionRestart={setUpdate}
                />}

                <ContainerCategories>
                    <FormProducts/>
                    <div>
                        <strong>Click on a product to update it</strong>
                        <DivCategories>
                        {products.length > 0 ?
                            <>
                                {products.map(product => (
                                    <DivCategory
                                        key={product.id}
                                        id={product.id}
                                    >
                                        <div onClick={() => handleOnClick(product.id, product.name)}>
                                            <h2>{product.name}</h2>
                                            <span>{product.price}</span>
                                        </div>
                                        <div 
                                            className='iconAdminCategories'
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            <FaWindowClose fontSize={'20px'} />
                                        </div>
                                    </DivCategory>
                                ))}
                            </>:
                            <DivCategory>
                                <h2>There are no registered products</h2>
                            </DivCategory>
                            }
                        </DivCategories>
                    </div>
                </ContainerCategories>
                {update && 
                    <FormUpdateProduct
                        idCategory={actualCategory.id}
                        idProduct={updateId}
                    />
                }
            </WhiteContainer>)
        }
    </>
  )
}

export default Products