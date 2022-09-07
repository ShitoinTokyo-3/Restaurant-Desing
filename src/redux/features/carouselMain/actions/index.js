import { setMainCarousel } from "../index";
import axios from "axios";

const BACKEND_URL = 'http://localhost:3001';

export const fechCarouselInfo = ( data ) => {
    return async (dispatch) => {

        const info = [
            {
                "title": "Brand Identity",
                "description": "Your brand identity begins with a logo and with stationery design: business cards, letterheads, envelopes, etc. A distinctive, memorable company logo serves as an effective brand-building tool and creates a lasting impression on your customers.",
                "backgroundColor": "#D7B41D",
                "color": "#fff",
                "link":"/payment"
            },{
                "title": "Social Media",
                "description": "A great design will help your restaurant social media initiatives succeed. Power up your social media campaigns with stunning designs: Facebook covers, Twitter headers, TikTok posts, Instagram stories, and more.",
                "backgroundColor": "#D72D0B",
                "color": "#ffffff",
                "link":"/payment"
            },{
                "title": "Advertisement Design",
                "description": "Every restaurant, no matter how big or little, needs to promote actively in order to connect with new customers. We can craft the perfect ad: Newspaper ads, trade shows both design, billboard, etc.",
                "backgroundColor": "#1D1D1D",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Menu Design",
                "description": "Restaurant menus are effective marketing tools since they encourage customers to visually explore what is being served. A menu can draw customers' attention and perhaps keep your brand in their minds so they will return.",
                "backgroundColor": "#0A7678",
                "color": "#FFFFFF",
                "link":"/payment"
            },{     
                "title": "Printing Design",
                "description": "Printing design covers everything that every restaurant should have: Takeout menus, disposable menus, flyers, postcards, posters, table inserts, brochures, banners, and more. Once the design is ready we can get you the best printing quote.",
                "backgroundColor": "#D12D27",
                "color": "#FFFFFF",
                "link":"/payment"
            },{     
                "title": " Packaging and Label",
                "description": "Looking for an “Out-the-box” design? Packaging and label is the consumer's first point of contact with your product or menu. A beautiful and creative product packaging design conveys the essence of your brand.",
                "backgroundColor": "#5CA031",
                "color": "#fff",
                "link":"/payment"
            },{     
                "title": "Clothing and Merch",
                "subtitle": "",
                "description": "Get striking restaurant merch and clothing designs, including t-shirts, stickers, hats, and mugs, made by our creative team. Promotional merchandise can be used to add a personal touch to your interactions with your employees and customers.",
                "backgroundColor": "#F5C835",
                "color": "#000000",
                "link":"/payment"
            },{     
                "title": "Website Design",
                "description": "Increase visibility and take your restaurant or food brand to the next level by getting high-quality design solutions for your website, app, and more! Our team of experts can create banner ads, blogs, landing pages, online ordering page, app icons, etc",
                "backgroundColor": "#009DE1",
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