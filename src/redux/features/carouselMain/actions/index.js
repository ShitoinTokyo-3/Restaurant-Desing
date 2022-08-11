import { setMainCarousel } from "../index";
import axios from "axios";

const BACKEND_URL = 'http://localhost:3001';

export const fechCarouselInfo = ( data ) => {
    return async (dispatch) => {
        axios.post(`${BACKEND_URL}/categories/mainCarousel`, data )
            .then((res) => {
                dispatch(setMainCarousel(res.data));
            })
    }
};