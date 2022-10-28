import axios from "axios";
import { setCategoriesRedux, setActualCategoryRedux, setActualCategoryWithProductsRedux } from "..";
import URL_BACKEND from "../../../../utilities/BackEnd/ruta";


export const getCategories = () => {
    return async (dispatch)=>{
        try {
            const res = await axios.get(`${URL_BACKEND}/categories`);
            dispatch(setCategoriesRedux(res.data)); 
        } catch (error) {
            const message = {
                id: 1,
                name: error.response.data,
            }
            dispatch(setCategoriesRedux([message]));
        }
    }
}

export const getCategory = (id) => {
    return async (dispatch)=>{
        try {
            console.log({id});
            const res = await axios.get(`${URL_BACKEND}/categories/${id}`);
            dispatch(setActualCategoryRedux(res.data)); 
        } catch (error) {
            const message = {
                id: 1,
                name: error.response.data,
            }
            dispatch(setActualCategoryRedux(message));
        }
    }
}

export const getCategoryByNames = async (name) => {
    const newName = name.replaceAll('-', " ");
    const url = `${URL_BACKEND}/categories/queryname?name=${newName}`
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
        //There is no registered category with that name 
    }
}

export const getCategoryWithProducts = (id) => {
    return async (dispatch)=>{
        try {
            const res = await axios.get(`${URL_BACKEND}/categories/products/${id}`);
            dispatch(setActualCategoryWithProductsRedux(res.data)); 
        } catch (error) {
            const message = {
                id: 1,
                name: error.response.data,
            }
            dispatch(setActualCategoryWithProductsRedux(message));
        }
    }
}

export const createCategory = async(category) => {
    try {
        await axios.post(`${URL_BACKEND}/categories`, category);
        return 'Category created';
    } catch (error) {
        return error.response.data.message;
    }
}

export const updateCategory = async(category) => {
    try {
        await axios.put(`${URL_BACKEND}/categories/${category.id}`, category);
        return 'Category updated';
    } catch (error) {
        return error.response.data;
    }
}

export const deleteCategory = async(id) => {
    try {
        await axios.delete(`${URL_BACKEND}/categories/${id}`);
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}
