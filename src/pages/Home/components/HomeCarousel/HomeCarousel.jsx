import Carousel from "../../../../components/Carousel/Carousel";
import { mediaByIndex } from "../../utilities/mediaCarousel/media";
import { fechCarouselInfo } from "../../../../redux/features/carouselMain/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const HomeCarousel = () => {

    const SLIDE_COUNT = 9;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const dispatch = useDispatch();
    const mainCarouselInfo = useSelector(state => state.carousels.carouselMainInfo);

    useEffect(() => {
        dispatch(fechCarouselInfo());
    }
    , [dispatch]);

    return (
        <>
            {mainCarouselInfo?.en?
            <Carousel slides={slides} media={mediaByIndex} carouselInfo={mainCarouselInfo}/>:
            ''}
        </>
    )
};

export default HomeCarousel;