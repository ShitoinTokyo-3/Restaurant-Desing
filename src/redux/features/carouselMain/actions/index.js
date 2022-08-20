import { setMainCarousel } from "../index";
import axios from "axios";

const BACKEND_URL = 'http://localhost:3001';

export const fechCarouselInfo = ( data ) => {
    return async (dispatch) => {

        const info = [
            {
                "title": "Packaging & Label",
                "description": "Looking for someone who could think outside the box? Our professional packaging designers can help.",
                "backgroundColor": "#FF6337",
                "color": "#fff",
                "link":"/payment"
            },{
                "title": "Business card design",
                "description": "Generate a memory of your brand with a professional business card.",
                "backgroundColor": "#F5B700",
                "color": "#fff",
                "link":"/payment"
            },{
                "title": "Print flyer design",
                "description": "Boost your brand with high-quality marketing materials, right from the get-go!",
                "backgroundColor": "#7D387D",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Logo Design",
                "description": "Get a logo that impacts your audience and that they recognize your brand in the blink of an eye",
                "backgroundColor": "#05E0F9",
                "color": "#000",
                "link":"/payment"
            },{     
                "title": "Stationery design",
                "description": "Avoid following molds and give personality to your business with just a few clicks",
                "backgroundColor": "#1F7E01",
                "color": "#fff",
                "link":"/payment"
            }
        ]
        dispatch(setMainCarousel(info));

        // axios.post(`${BACKEND_URL}/categories/mainCarousel`, data )
        //     .then((res) => {
        //         dispatch(setMainCarousel(res.data));
        //     })
    }
};