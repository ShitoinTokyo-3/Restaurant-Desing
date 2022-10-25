import axios from "axios";
import { setProductsRedux,setActualProductRedux } from "..";
import URL_BACKEND from "../../../../utilities/BackEnd/ruta";


export const getProducts = (id) => {
    return async (dispatch)=>{
        try {
            const res = await axios.get(`${URL_BACKEND}/products/${id}`);
            dispatch(setProductsRedux(res.data)); 
        } catch (error) {
            const message = {
                id: 1,
                name: error.response.data,
            }
            dispatch(setProductsRedux([message]));
        }
    }
}

export const getProduct = (idCategory, id) => {
    return async (dispatch)=>{
        try {
            const res = await axios.get(`${URL_BACKEND}/products/${idCategory}/${id}`);
            dispatch(setActualProductRedux(res.data)); 
        } catch (error) {
            const message = {
                id: 1,
                name: error.response.data,
            }
            dispatch(setActualProductRedux(message));
        }
    }
}

export const getProductByNames = (idCategory , name) => {
    return async (dispatch)=>{
        try {
            const res = await axios.get(`${URL_BACKEND}/products/query/${idCategory}/name/${name}`);
            dispatch(setActualProductRedux(res.data));
        } catch (error) {
            const message = {
                id: 1,
                name: error.response.data,
            }
            dispatch(setActualProductRedux(message));
        }
    }
}

export const createProduct = async(id, product) => {
    try {
        await axios.post(`${URL_BACKEND}/products/${id}`, product);
        return 'Product created';
    } catch (error) {
        return error.response.data.message;
    }
}

export const createExamplesDescription = async(idCategory, id, examplesDescription) => {
    try {
        await axios.post(`${URL_BACKEND}/products/${idCategory}/${id}`, {examplesDescription});
        return 'Description created';
    } catch (error) {
        return error.response.data.message;
    }
}

export const updateProduct = async(id, product) => {
    try {
        await axios.put(`${URL_BACKEND}/products/${id}/${product.id}`, product);
        return 'Product updated';
    } catch (error) {
        return error.response.data;
    }
}

export const deleteProduct = async(idCategory, id) => {
    try {
        await axios.delete(`${URL_BACKEND}/products/${idCategory}/${id}`);
    } catch (error) {
        return error.response.data;
    }
}
