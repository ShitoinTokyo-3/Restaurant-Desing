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
                "description": "Pieces for social networks, posts, stories, short videos.",
                "backgroundColor": "#E6C229",
                "color": "#000000",
                "link":"/payment"
            },{
                "title": "Advertisement Design",
                "description": "Billboard, car/van wraps, newspaper, trade show, etc...",
                "backgroundColor": "#861657",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Menu Design",
                "description": "We create your menu to print or your digital menu",
                "backgroundColor": "#00171F",
                "color": "#FFFFFF",
                "link":"/payment"
            },{     
                "title": "Printing Design",
                "description": "Flyers, postcards, posters, brochures, banner, etc...",
                "backgroundColor": "#D12D27",
                "color": "#FFFFFF",
                "link":"/payment"
            },{     
                "title": " Packaging and Label",
                "description": "We create packages and labels that talk about the benefits of the product.",
                "backgroundColor": "#0FA3B1",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Clothing and Merch",
                "description": "Stickers, merchandise, mugs, totes, aprons, tshirts",
                "backgroundColor": "#FB5012",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Website Design",
                "description": "Banner ad, blog, Landing page, online ordering page, etc...",
                "backgroundColor": "#2E86AB",
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