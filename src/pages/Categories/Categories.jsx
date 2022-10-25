import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";
import { getCategoryByNames, getCategoryWithProducts } from "../../redux/features/categories/actions";
import { BolderLetter, TextMain } from "../../styled-components/Containers/Containers";
import Product from "./components/Product/Product";
import { ContainerListProducts } from "./components/styled-components/Product";

const Categories = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const [notFound, setNotFound] = useState(false)


    const actualCategoryWithProducts = useSelector(state => state.categories.actualCategoryWithProducts);

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

  return (
    <>
        <Navbar/>
        {actualCategoryWithProducts?.name &&<> 
            <TextMain>
                    <h3>{actualCategoryWithProducts.name}</h3>
                <p>{actualCategoryWithProducts.description}</p>
            </TextMain>
                
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
        </>}
    </>
  )
}

export default Categories