import axios from "axios";
import { setExampleRedux, setActualExampleRedux, cleanExampleRedux } from "..";
import URL_BACKEND from "../../../../utilities/BackEnd/ruta";

export const getExamples = (id) => {
    return async (dispatch)=>{
        try {
            const res = await axios.get(`${URL_BACKEND}/examples/${id}`);
            dispatch(setExampleRedux(res.data));
        } catch (error) {
            const message = {
                id: 1,
                title: error.response.data,
            }
            dispatch(setExampleRedux([message]));
        }
    }
}

export const cleanExamples = () => {
    return async (dispatch)=>{
        dispatch(cleanExampleRedux());
    }
};

export const getExample = (idProduct, id) => {
    return async (dispatch)=>{
        try {
            const res = await axios.get(`${URL_BACKEND}/examples/${idProduct}/${id}`);
            dispatch(setActualExampleRedux(res.data));
        } catch (error) {
            const message = {
                id: 1,
                title: error.response.data,
            }
            dispatch(setActualExampleRedux(message));
        }
    }
}


export const createExample = async(id, example) => {
    try {
        await axios.post(`${URL_BACKEND}/examples/${id}`, example);
        return 'Example created';
    } catch (error) {
        console.log(error);
        return error.response.data.message;
    }
}

export const updateExample = async(id, example) => {
    try {
        await axios.put(`${URL_BACKEND}/examples/${id}/${example.id}`, example);
        return 'Example updated';
    } catch (error) {
        return error.response.data;
    }
}

export const deleteExample = async(idProduct, id) => {
    try {
        await axios.delete(`${URL_BACKEND}/examples/${idProduct}/${id}`);
        return 'Example deleted';
    } catch (error) {
        return error.response.data;
    }
}