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
import { deleteProduct, cleanProducts, getProducts, getProduct } from "../../../../redux/features/products/actions"
import ModalConfirmationDelete from "../../../../components/ModalConfirmationDelete/ModalConfirmationDelete"

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

    const [ openModalConfirmationDelete, setOpenModalConfirmationDelete ] = useState(false);

    const setModalConfirmationDelete = () => {
        setOpenModalConfirmationDelete(false);
    }

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

        setUpdateId(id);
        setOpenModalConfirmationDelete(true);

    }

    const handleConfirmationDelete = () => {
        setUpdate(false);
        setOpenModalConfirmationDelete(false);
        deleteProduct( actualCategory.id, updateId );
        dispatch(cleanProducts());
        setTimeout(() => {
            dispatch(getProducts(actualCategory.id));
        }, 2000);
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
                    <h1>Services</h1>
                    <p>Here you can see all the services of the selected category</p>
                </TextContainer>
                {categories[0]?.name &&
                <OptionsCategories 
                    listCategories={categories}
                    functionRestart={setUpdate}
                />}

                <ContainerCategories>
                    <FormProducts/>
                    <div style={{marginTop: '464px'}}>
                        <strong>Click on a service to update it</strong>
                        <DivCategories>
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
                                        {product.name !== 'There is no registered products' &&
                                            <div 
                                                className='iconAdminCategories'
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                <FaWindowClose fontSize={'20px'} />
                                            </div>
                                        }
                                    </DivCategory>
                                ))}
                            </>
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
        <ModalConfirmationDelete
            open={openModalConfirmationDelete}
            functionUse={setModalConfirmationDelete}
            entity={'product'}
            functionToDelete={handleConfirmationDelete}
        />
    </>
  )
}

export default Products