import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import CarouselNextButton from "./components/CarouselNextButton/CarouselNextButton";
import CarouselPrevButton from "./components/CarouselPrevButton/CarouselPrevButton";
import CarouselImgContainer from "./components/CarouselImgContainer/CarouselImgContainer";
import s from './Carousel.module.css'

const Carousel = ({ slides, media, carouselInfo }) => {
    const PARALLAX_FACTOR = 4.5;

    const [viewportRef, embla] = useEmblaCarousel({
        loop: false,
        dragFree: true,
    })

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [parallaxValues, setParallaxValues] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    const onScroll = useCallback(() => {
        if (!embla) return;
            
        const engine = embla.internalEngine();
        const scrollProgress = embla.scrollProgress();
            
        const styles = embla.scrollSnapList().map((scrollSnap, index) => {
            if (!embla.slidesInView().includes(index)) return 0;
            let diffToTarget = scrollSnap - scrollProgress;
                
            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.getTarget();
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target);
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                    }
                });
            }
            return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
        });
        setParallaxValues(styles);
    }, [embla, setParallaxValues]);
    
    useEffect(() => {
        if (!embla) return;
        onSelect();
        onScroll();
        embla.on("select", onSelect);
        embla.on("scroll", onScroll);
        embla.on("resize", onScroll);
    }, [embla, onSelect, onScroll]);
     
    return (
    <div className={s.embla}>
        <div className={s.embla__viewport} ref={viewportRef}>
            <div className={s.embla__container}>
                {slides.map((index) => (
                    <div className={s.embla__slide} key={index}>
                        <div className={s.embla__slide__inner}>
                            <div
                                className={s.embla__slide__parallax}
                                style={{ transform: `translateX(${parallaxValues[index]}%)` }}
                            >
                                    <CarouselImgContainer
                                        img={media(index)}
                                        srcText={carouselInfo[index]}
                                    />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <CarouselPrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <CarouselNextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
    )
}

export default Carousel;