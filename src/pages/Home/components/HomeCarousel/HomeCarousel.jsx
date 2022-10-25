import Carousel from "../../../../components/Carousel/Carousel";
import { fechCarouselInfo } from "../../../../redux/features/carouselMain/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const HomeCarousel = () => {

    
    const dispatch = useDispatch();
    const mainCarouselInfo = useSelector(state => state.carousels.carouselMainInfo);
        
    const SLIDE_COUNT = mainCarouselInfo.length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const imgArray = mainCarouselInfo.map((item) => {
        return item.img;
    });
    const mediaByIndex = index => imgArray[index % imgArray.length];

    
    useEffect(() => {
        dispatch(fechCarouselInfo());
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