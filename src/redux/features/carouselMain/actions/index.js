import { setMainCarousel } from "../index";
import axios from "axios";

const BACKEND_URL = 'http://localhost:3001';

export const fechCarouselInfo = ( data ) => {
    return async (dispatch) => {

        const info = [
            {
                "title": "Brand Identity",
                "description": "Logo, stationery, business cards, leterhead, etc...",
                "backgroundColor": "#FF6337",
                "color": "#fff",
                "link":"/payment"
            },{
                "title": "Social Media",
                "description": "",
                "backgroundColor": "#F5B700",
                "color": "#fff",
                "link":"/payment"
            },{
                "title": "Advertisement Design",
                "description": "Billboard, car/van wraps, newspaper, trade show, etc...",
                "backgroundColor": "#7D387D",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Menu Design",
                "description": "",
                "backgroundColor": "#05E0F9",
                "color": "#000",
                "link":"/payment"
            },{     
                "title": "Printing Design",
                "description": "Flyers, postcards, posters, brochures, banner, etc...",
                "backgroundColor": "#1F7E01",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": " Packaging and Label",
                "description": "",
                "backgroundColor": "#1F7E01",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Clothing and Merch",
                "description": "Stickers, merchandise, mugs, totes, aprons, tshirts",
                "backgroundColor": "#1F7E01",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Website Design",
                "description": "Banner ad, blog, Landing page, online ordering page, etc...",
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