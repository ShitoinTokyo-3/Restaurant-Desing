import Carousel from "../../../../components/Carousel/Carousel";

const HomeCarousel = ({mainCarouselInfo}) => {
        
    const SLIDE_COUNT = mainCarouselInfo.length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const imgArray = mainCarouselInfo.map((item) => {
        return item.img;
    });
    const mediaByIndex = index => imgArray[index % imgArray.length];

    return (
        <>
            {mainCarouselInfo.length?
            <Carousel slides={slides} media={mediaByIndex} carouselInfo={mainCarouselInfo}/>:
            ''}
        </>
    )
};

export default HomeCarousel;