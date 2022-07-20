import { setMainCarousel } from "../index";
import axios from "axios";

export const fechCarouselInfo = () => {
    return async (dispatch) => {
        axios.get("http://localhost:8000/mainCarousel")
            .then((res) => {
                dispatch(setMainCarousel(res.data));
            })
    }
};