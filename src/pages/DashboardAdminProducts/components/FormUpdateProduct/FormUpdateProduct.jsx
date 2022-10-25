import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getProduct, updateProduct } from "../../../../redux/features/products/actions";
import { ButtonCategories, ErrorCategory, FormCategory, InputCategories, SuccessCategory, TextareaCategories } from "../../../DashboardAdminCategories/components/styled-components/dashboardAdminCategory";

const FormUpdateProduct = ({ idCategory, idProduct}) => {

    const actualProduct = useSelector(state => state.products.actualProduct)

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: actualProduct.name,
        description: actualProduct.description,
        descriptionModal: actualProduct.descriptionModal,
        img: actualProduct.img,
        link: actualProduct.link,
        price: actualProduct.price,
    });

    const [readyUpdate, setReadyUpdate] = useState(false);

    const [validForm, setValidForm] = useState(null);

    const [errorBack, setErrorBack] = useState('');

    const [fineBack, setFineBack] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setFineBack('');
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setReadyUpdate(!readyUpdate);

        const name = e.target.name.value;
        const description = e.target.description.value;
        const descriptionModal = e.target.descriptionModal.value;
        const img = e.target.img.value;
        const link = e.target.link.value;
        const price = e.target.price.value;

        if(name === '' || description === '' || descriptionModal === '' || img === '' || link === '' || price === ''){
            setValidForm(false);
        }else if( readyUpdate){

            const obj = {
                id: idProduct,
                name: name,
                description: description,
                descriptionModal: descriptionModal,
                img: img,
                link: link,
                price: price,
            }
            const res = await updateProduct( idCategory , obj);
            if(res === 'Product updated') {
                dispatch(getProducts(idCategory));
                dispatch(getProduct(idCategory, idProduct));
                setValidForm(null);
                setErrorBack('');
                setFineBack(res);
            }else {
                setValidForm(null);
                setErrorBack(res);
                setFineBack('');
            }
        }
    }

    useEffect(() => {
        dispatch((getProduct(idCategory, idProduct)));
      }, []);
    
  return (
    <FormCategory 
        onSubmit={handleOnSubmit}
    >
        <h2>Update Product</h2>
        <label htmlFor="name">Product name</label>
        <InputCategories
            type="text" 
            name="name" 
            value={form.name}
            onChange={handleChange}
            disabled={!readyUpdate}
        />
        <label htmlFor="description">Description</label>
        <TextareaCategories
            type="text" 
            name="description" 
            value={form.description}
            onChange={handleChange}
            disabled={!readyUpdate}
        />
        <label htmlFor="descriptionModal">Description Modal</label>
        <TextareaCategories
            type="text"
            name="descriptionModal"
            value={form.descriptionModal}
            onChange={handleChange}
            disabled={!readyUpdate}
        />
        <label htmlFor="img">Image</label>
        <InputCategories 
            type="text" 
            name="img" 
            value={form.img}
            onChange={handleChange}
            disabled={!readyUpdate}
        />
        <label htmlFor="link">Link to Stripe</label>
        <InputCategories
            type="text"
            name="link"
            value={form.link}
            onChange={handleChange}
            disabled={!readyUpdate}
        />
        <label htmlFor="price">Price</label>
        <InputCategories
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            disabled={!readyUpdate}
        />
        <ButtonCategories 
            type="submit" 
            value={readyUpdate ? 'Update' : 'Click to update'}
        />
        
        {validForm === false && <ErrorCategory>Complete all fields</ErrorCategory>}
        {errorBack && <ErrorCategory>{errorBack}</ErrorCategory>}
        {fineBack && <SuccessCategory>{fineBack}</SuccessCategory>}
    </FormCategory>
  )
}

export default FormUpdateProduct