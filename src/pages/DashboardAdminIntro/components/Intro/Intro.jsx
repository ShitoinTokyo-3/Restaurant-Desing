import { useTranslation } from "react-i18next";
import Carousel from "../../../../components/Carousel/Carousel";
import { WhiteContainer } from "../../../../styled-components/Containers/Containers"
import { TextContainer } from "../styled-components/textContainer"
import CategoriesPanleCreate from "../../../../assets/DashboardAdmin/CategoriesPanel.png"
import CategoriesPanelEdit from "../../../../assets/DashboardAdmin/CategoriesUpdate.png"
import CategoriesSquare from "../../../../assets/DashboardAdmin/CategoriesSquare.png"
import CategoriesUpdateReady from "../../../../assets/DashboardAdmin/CategoriesUpdateReady.png"
import CategoriesDelete from "../../../../assets/DashboardAdmin/CategoriesDelete.png"

const Intro = () => {
    const { t } = useTranslation(['dashboardAdmin']);

    const mainCarouselInfo = [
        {
            img:"https://res.cloudinary.com/daqumb8mh/image/upload/v1665585806/Images%20of%20carousel%20%28Categories%29/Social_Media_w131ru.jpg",
            name:"Social Media",
            description:"Genera un recuerdo duradero en tus clientes con el logotipo de tu negocio y el diseño de tus tarjetas profesionales.",
            backgroundColor:"#D51313",
            color:"#fff"
        },
        {
            img:"https://res.cloudinary.com/daqumb8mh/image/upload/v1665585806/Images%20of%20carousel%20%28Categories%29/Menu_Design_w9dcet.jpg",
            name:"Menu Design",
            description:"Restaurant menus are effective marketing tools since they encourage customers to visually explore what is being served. A menu can draw customers' attention and perhaps keep your brand in their minds so they will return.",
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
            <p>{t("intro.Services.text4")}</p>
            <p>{t("intro.Services.text5")}</p>
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
                <li>{t("intro.Services.Creation.list.op5")}</li>
                <li>{t("intro.Services.Creation.list.op6")}</li>
            </ul>
            <p>{t("intro.Services.Creation.text3")}</p>
            <p>{t("intro.Services.Creation.text4")}</p>
            <h3
                id="servicesEdit"
            >{t("intro.Services.Update.title")}</h3>
            <p>{t("intro.Services.Update.text")}</p>
            <p>{t("intro.Services.Update.text2")}</p>
            <p>{t("intro.Services.Update.text3")}</p>
            <p>{t("intro.Services.Update.text4")}</p>
            <h3
                id="servicesDelete"
            >{t("intro.Services.Delete.title")}</h3>
            <p>{t("intro.Services.Delete.text")}</p>
        </TextContainer>
    </WhiteContainer>
  )
}

export default Intro