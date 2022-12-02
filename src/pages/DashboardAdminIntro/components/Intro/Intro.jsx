//Node Modules
import { useTranslation } from "react-i18next";
//Images
import CategoriesPanleCreate from "../../../../assets/DashboardAdmin/CategoriesPanel.png"
import CategoriesPanelEdit from "../../../../assets/DashboardAdmin/CategoriesUpdate.png"
import CategoriesSquare from "../../../../assets/DashboardAdmin/CategoriesSquare.png"
import CategoriesUpdateReady from "../../../../assets/DashboardAdmin/CategoriesUpdateReady.png"
import CategoriesDelete from "../../../../assets/DashboardAdmin/CategoriesDelete.png"
import ServicesCategories from '../../../../assets/DashboardAdmin/ServicesCategories.png'
import ServiceExample from "../../../../assets/DashboardAdmin/ServiceExample.png"
import ServicesCategoriesList from "../../../../assets/DashboardAdmin/ServicesCategoriesList.png"
import ServicesForm from "../../../../assets/DashboardAdmin/ServicesForm.png"
import ServicesDiv from "../../../../assets/DashboardAdmin/ServicesDiv.png"
import ServicesUpdate from "../../../../assets/DashboardAdmin/ServicesUpdate.png"
import ServicesUpdateReady from "../../../../assets/DashboardAdmin/ServicesUpdateReady.png"
import ServiceDelete from "../../../../assets/DashboardAdmin/ServiceDelete.png"
//Components
import Carousel from "../../../../components/Carousel/Carousel";
import { WhiteContainer } from "../../../../styled-components/Containers/Containers"
import { NavToUp, TextContainer } from "../styled-components/textContainer"
//Icons
import { HiChevronDoubleUp } from "react-icons/hi"

const Intro = () => {
    const { t } = useTranslation(['dashboardAdmin']);

    const mainCarouselInfo = [
        {
            img:"https://res.cloudinary.com/daqumb8mh/image/upload/v1665585805/Images%20of%20carousel%20%28Categories%29/Brand_Identity_logo_stationery_business_cards_leterhead_etc_z9wotf.jpg",
            name:"Brand Indentity",
            description:"A logo is the foundation of your brand identity  while letterheads, business cards, and envelopes help create the exceptional brand image. It’s safe to say that logo design leaves a long-lasting impact on the customers, so make sure it’s on point!",
            backgroundColor:"#F5B700",
            color:"#fff"
        },
        {
            img:"https://res.cloudinary.com/daqumb8mh/image/upload/v1665585806/Images%20of%20carousel%20%28Categories%29/Social_Media_w131ru.jpg",
            name:"Social Media",
            description:"Ranging from Facebook to Twitter and Instagram posts, high-quality designs can support your social media campaigns to expand the sales funnel. At Restaurant Design Bar, we can create posts that resonate with your audience.",
            backgroundColor:"#D51313",
            color:"#fff"
        },
        {
            img:"https://res.cloudinary.com/daqumb8mh/image/upload/v1665585806/Images%20of%20carousel%20%28Categories%29/van_wraps_newspaper_trade_show_etc_pj91hs.jpg",
            name:"Advertisement Design",
            description:"Promotion and marketing are crucial for connecting to a new customer base, and at Restaurant Design Bar, we have the creativity and resources to craft advertisements such as newspaper ads, trade show booth design, billboards, etc.",
            backgroundColor:"#1A1A1A",
            color:"#fff"
        },
        {
            img:"https://res.cloudinary.com/daqumb8mh/image/upload/v1665585806/Images%20of%20carousel%20%28Categories%29/Menu_Design_w9dcet.jpg",
            name:"Menu Design",
            description:"Restaurant menus are effective marketing tools since they encourage customers to visually explore what is being served. A menu can draw customers' attention and perhaps keep your brand in their minds so they will return.",
            backgroundColor:"#008999",
            color:"#fff"
        },
        {
            img:"https://res.cloudinary.com/daqumb8mh/image/upload/v1665585806/Images%20of%20carousel%20%28Categories%29/Printing_Design_Flyers_postcards_posters_brochures_banner_etc_dbo1do.jpg",
            name:"Printing Design",
            description:"Ranging from takeout menus to disposable menus, flyers to postcards, posters to table inserts, brochures to banners, and more, our printing design services are designed to cater to all your printing needs.",
            backgroundColor:"#008999",
            color:"#fff"
        }
    ];
        
    const SLIDE_COUNT = mainCarouselInfo.length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const imgArray = mainCarouselInfo.map((item) => {
        return item.img;
    });
    const mediaByIndex = index => imgArray[index % imgArray.length];

    const productInfo = {
        name: 'Name',
        price:'999',
        img:'https://res.cloudinary.com/daqumb8mh/image/upload/v1666975786/Service%20Images/Business_Card_Design_rg0cff.png',
        descriptionModal:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }

    return (
    <WhiteContainer>
        <TextContainer>
            <h1>{t("intro.title")}</h1>
            <p>{t("intro.text")}</p>

            <h3>Index</h3>
            <ol>
                <li>
                    <a 
                        href="#categories"
                    >Categories</a>
                    <ul>
                        <li>
                            <a
                                href="#categoriesCreate"
                            >Create</a>
                        </li>
                        <li>
                            <a
                                href="#categoriesEdit"
                            >Update</a>
                        </li>
                        <li>
                            <a
                                href="#categoriesDelete"
                            >Delete</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a 
                        href="#services"
                    >Services</a>
                    <ul>
                        <li>
                            <a
                                href="#servicesCreate"
                            >Create</a>
                        </li>
                        <li>
                            <a
                                href="#servicesEdit"
                            >Update</a>
                        </li>
                        <li>
                            <a
                                href="#servicesDelete"
                            >Delete</a>
                        </li>
                    </ul>
                </li>
            </ol>
            {/* Categories */}
            <h2
                id="categories"
            >{t("intro.categories.title")}</h2>
            <p>{t("intro.categories.text")}</p>
            <p>{t("intro.categories.text2")}</p>
            <ul>
                <li>{t("intro.categories.list1.op1")}</li>
                <li>{t("intro.categories.list1.op2")}</li>
                <li>{t("intro.categories.list1.op3")}</li> 
                <li>{t("intro.categories.list1.op4")}</li>
            </ul>
        </TextContainer>
        <Carousel slides={slides} media={mediaByIndex} carouselInfo={mainCarouselInfo} example/>

        <TextContainer>

            <p>{t("intro.categories.text3")}</p>
            <h3
                id="categoriesCreate"
            >{t("intro.categories.Creation.title")}</h3>
            <p>{t("intro.categories.Creation.text")}</p>
            <ul>
                <li>{t("intro.categories.Creation.list2.op1")}</li>
                <li>{t("intro.categories.Creation.list2.op2")}</li>
                <li>{t("intro.categories.Creation.list2.op3")}</li>
                <li>{t("intro.categories.Creation.list2.op4")}</li>
                <li>{t("intro.categories.Creation.list2.op5")}</li>
            </ul>
            <img src={CategoriesPanleCreate} alt="Categories Panel Create" id="dashboardImgBig"/>

            <p>{t("intro.categories.Creation.text2")}</p>
            <p>{t("intro.categories.Creation.text3")}</p>
            <h3
                id="categoriesEdit"
            >{t("intro.categories.Update.title")}</h3>
            <p>{t("intro.categories.Update.text")}</p>

            <img src={CategoriesSquare} alt="Categories Panel Create" id="dashboardImg"/>
            
            <p>{t("intro.categories.Update.text2")}</p>

            <img src={CategoriesPanelEdit} alt="Categories Panel Create" id="dashboardImgBig"/>

            <p>{t("intro.categories.Update.text3")}</p>

            <img src={CategoriesUpdateReady} alt="Categories Panel Create" id="dashboardImgBig"/>

            <p>{t("intro.categories.Update.text4")}</p>
            <h3
                id="categoriesDelete"
            >{t("intro.categories.Delete.title")}</h3>

            <img src={CategoriesDelete} alt="Categories Panel Create" id="dashboardImgBig"/>
            
            <p>{t("intro.categories.Delete.text")}</p>
            {/* Services */}
            <h2
                id="services"
            >{t("intro.Services.title")}</h2>
            <p>{t("intro.Services.text")}</p>
            <p>{t("intro.Services.text2")}</p>
            <p>{t("intro.Services.text3")}</p>
            <ul>
                <li>{t("intro.Services.list1.op1")}</li>
                <li>{t("intro.Services.list1.op2")}</li>
                <li>{t("intro.Services.list1.op3")}</li>
                <li>{t("intro.Services.list1.op4")}</li>
                <li>{t("intro.Services.list1.op5")}</li>
                <li>{t("intro.Services.list1.op6")}</li>
            </ul>

            <img src={ServicesCategories} alt="Categories Panel Create" id="dashboardImgBig"/>
            <img src={ServiceExample} alt="Categories Panel Create" id="dashboardImgBig"/>

            <p>{t("intro.Services.text4")}</p>
            <p>{t("intro.Services.text5")}</p>

            <img src={ServicesCategoriesList} alt="Categories Panel Create" id="dashboardImgBig"/>

            <h3
                id="servicesCreate"
            >{t("intro.Services.Creation.title")}</h3>
            <p>{t("intro.Services.Creation.text")}</p>
            <p>{t("intro.Services.Creation.text2")}</p>
            <ul>
                <li>{t("intro.Services.Creation.list.op1")}</li>
                <li>{t("intro.Services.Creation.list.op2")}</li>
                <li>{t("intro.Services.Creation.list.op3")}</li>
                <li>{t("intro.Services.Creation.list.op4")}</li>
                <li>{t("intro.Services.Creation.list.op5")}  <a href="https://stripe.com/docs/payments/payment-links" target="_blank">Share payment links</a>   </li>
                <li>{t("intro.Services.Creation.list.op6")}</li>
            </ul>

            <img src={ServicesForm} alt="Categories Panel Create" id="dashboardImgBig"/>

            <p>{t("intro.Services.Creation.text3")}</p>
            <p>{t("intro.Services.Creation.text4")}</p>
            <h3
                id="servicesEdit"
            >{t("intro.Services.Update.title")}</h3>
            <p>{t("intro.Services.Update.text")}</p>

            <img src={ServicesDiv} alt="Categories Panel Create" id="dashboardImg"/>

            <p>{t("intro.Services.Update.text2")}</p>

            <img src={ServicesUpdate} alt="Services not found" id="dashboardImgBig"/>

            <p>{t("intro.Services.Update.text3")}</p>

            <img src={ServicesUpdateReady} alt="Services not found" id="dashboardImgBig"/>

            <p>{t("intro.Services.Update.text4")}</p>
            <h3
                id="servicesDelete"
            >{t("intro.Services.Delete.title")}</h3>
            <p>{t("intro.Services.Delete.text")}</p>

            <img src={ServiceDelete} alt="Services not found" id="dashboardImgBig"/>

        </TextContainer>
        <a href="#">
            <NavToUp>
                <HiChevronDoubleUp/>
            </NavToUp>
        </a>
    </WhiteContainer>
  )
}

export default Intro