import { setMainCarousel } from "../index";
import axios from "axios";
import URL_BACKEND from "../../../../utilities/BackEnd/ruta";

export const fechCarouselInfo = ( data ) => {
    return async (dispatch) => {
        const res = await axios.get(`${URL_BACKEND}/carousel`);
        dispatch(setMainCarousel(res.data));
    }
};
