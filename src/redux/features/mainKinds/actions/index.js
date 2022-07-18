import { setKinds } from "../index";
import axios from "axios";

export const fechKinds = () => {
    return async (dispatch) => {
        axios.get("http://localhost:8000/kind")
            .then((res) => {
                dispatch(setKinds(res.data));
            })
    }
};