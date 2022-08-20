import Carousel from "../../../../components/Carousel/Carousel";
import { mediaByIndex } from "../../utilities/mediaCarousel/media";
import { fechCarouselInfo } from "../../../../redux/features/carouselMain/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HomeCarousel = () => {

    const SLIDE_COUNT = 5;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const dispatch = useDispatch();
    const mainCarouselInfo = useSelector(state => state.carousels.carouselMainInfo);

    const { i18n } = useTranslation(['translation']);


    useEffect(() => {
        dispatch(fechCarouselInfo({ lang: i18n.language }));
    }
    , [dispatch]);

    return (
        <>
            {mainCarouselInfo.length?
            <Carousel slides={slides} media={mediaByIndex} carouselInfo={mainCarouselInfo}/>:
            ''}
        </>
    )
};

export default HomeCarousel;