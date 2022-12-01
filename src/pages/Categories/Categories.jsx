import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import Navbar from "../../components/Navbar/Navbar";
import { cleanCategories, cleanCategoryWithCategories, getCategoryByNames, getCategoryWithProducts } from "../../redux/features/categories/actions";
import { cleanProducts } from "../../redux/features/products/actions";
import { BolderLetter, TextMainCategories } from "../../styled-components/Containers/Containers";
import Product from "./components/Product/Product";
import { ContainerListProducts } from "./components/styled-components/Product";

const Categories = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const [notFound, setNotFound] = useState(false)


    const actualCategoryWithProducts = useSelector(state => state.categories.actualCategoryWithProducts);

    const [modal, setModal] = useState(false);

    const setModalFunction = () => {
        setModal(false);
    }

    useEffect(() => {

        async function fetchData() {
            const category =await  getCategoryByNames(params.category);
            if (category === 'There is no registered category with that name') {
                setNotFound(true)
            } else {
                setNotFound(false)
                dispatch(getCategoryWithProducts(category.id));
            }
        }
        fetchData();
    }, []);

  if(notFound) return <Navigate to="/*"/>

    useEffect(() => {
        return () => {
            dispatch(cleanProducts());
            dispatch(cleanCategories());
            dispatch(cleanCategoryWithCategories());
        }
    }, [])

    console.log(actualCategoryWithProducts)

  return (
    <>
        {actualCategoryWithProducts?.name &&<> 
            <Navbar modalOpen={modal} setModal={setModal}/>
            <TextMainCategories>
                <h3>{actualCategoryWithProducts.name}</h3>
                <p>{actualCategoryWithProducts.description}</p>
            </TextMainCategories>
                
            <ContainerListProducts>
            {actualCategoryWithProducts.Products.map(product => <div key={product.id}>
            <Product
                key={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                params={params.category}
            >
                {product.descriptionModal}
            </Product>
            </div>)}
            </ContainerListProducts>
            <Footer/>

            
            <ModalLogin
                open={modal}
                functionUse={setModalFunction}
                openModal={setModal}
            />
        </>}
    </>
  )
}

export default Categories