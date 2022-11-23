import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanProducts, createProduct, getProducts } from "../../../../redux/features/products/actions";
import Product from "../../../Categories/components/Product/Product";
import { ButtonCategories,ErrorCategory, FormCategory, InputCategories, SuccessCategory, TextareaCategories } from "../../../DashboardAdminCategories/components/styled-components/dashboardAdminCategory"


const FormProducts = () => {

  const dispatch = useDispatch();
  const actualCategory = useSelector(state => state.categories.actualCategory);
     
  const [errorBack, setErrorBack] = useState('');

  const [fineBack, setFineBack] = useState('');
  
  const [product , setProduct] = useState({
      name: '',
      description: '',
      descriptionModal: '',
      img: '',
      link:'',
      price: '',
      valid: null,
  });
  
  const [productInfo, setProductInfo] = useState({
    name: 'Name',
    price:'999',
    img:'https://res.cloudinary.com/daqumb8mh/image/upload/v1666975790/Service%20Images/Logo_Design_hn5pni.png',
    descriptionModal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
})

  const handleChange = (e) => {
    setProduct({
        ...product,
        [e.target.name]: e.target.value
    })
    setProductInfo({
        ...productInfo,
        [e.target.name]: e.target.value
    })

    setFineBack('');
}


const handleOnSubmit = async (e) => {
  e.preventDefault();

  if(product.name === '' || product.description === '' || product.descriptionModal === '' || product.img === '' || product.link === '' || product.price === ''){
      setProduct({
          ...product,
          valid: false
      })
  }else {
      setProduct({
          ...product,
          valid: true
      })
      const obj = {
          name: product.name,
          description: product.description,
          descriptionModal: product.descriptionModal,
          img: product.img,
          link: product.link,
          price: product.price,
      }
      const response = await createProduct(actualCategory.id,obj);
      if(response  === 'Product created'){
          dispatch(cleanProducts());
          dispatch(getProducts(actualCategory.id));
          setProduct({
            name: '',
            description: '',
            descriptionModal: '',
            img: '',
            link:'',
            price: '',
            valid: null,
          })
          setErrorBack('');
          setFineBack(`Product created in ${actualCategory.name}`);
      }else {
          setErrorBack(response);
          setFineBack('');
      }
  }
}



  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
        }}
    >
        <Product 
            name={productInfo.name}
            price={productInfo.price}
            img={productInfo.img}
            children={productInfo.descriptionModal}
        />

        <FormCategory 
        onSubmit={handleOnSubmit}
        >
            <h2>Create Product</h2>
            <InputCategories
                type="text" 
                placeholder="Product name" 
                name="name"
                value={product.name}
                onChange={handleChange}
            />        
            <TextareaCategories
                placeholder="Preview Description"
                name="descriptionModal"
                value={product.descriptionModal}
                onChange={handleChange}
            />
            <TextareaCategories
                placeholder="Description"
                name="description"
                value={product.description}
                onChange={handleChange}
            />
            <InputCategories
                type="text"
                placeholder="Image" 
                name="img"
                value={product.img}
                onChange={handleChange}
            />
            <InputCategories
                type="text"
                placeholder="Link to Stripe"
                name="link"
                value={product.link}
                onChange={handleChange}
            />
            <InputCategories
                type="number"
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={handleChange}
            />
            <ButtonCategories type='submit' value='Create' />
            {product.valid === false && <ErrorCategory>Complete all fields</ErrorCategory>}
            {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
            {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
        </FormCategory>

    </div>
  )
}

export default FormProducts