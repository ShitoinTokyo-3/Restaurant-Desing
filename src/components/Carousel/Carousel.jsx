import { useState, useEffect, useCallback, useRef } from "react";
import CarouselNextButton from "./components/CarouselNextButton/CarouselNextButton";
import CarouselPrevButton from "./components/CarouselPrevButton/CarouselPrevButton";
import CarouselImgContainer from "./components/CarouselImgContainer/CarouselImgContainer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import s from './Carousel.module.css'

const Carousel = ({ slides, media, carouselInfo }) => {



    const options = { 
        loop: true, 
        align: "center", 
        skipSnaps: false 
    };

    const autoplay = useRef(
        Autoplay(
          { delay: 4000, stopOnInteraction: true },
          (emblaRoot) => emblaRoot.parentElement
        )
      );
    
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    
    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        autoplay.current.reset();
    }, [emblaApi]);
    
    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        autoplay.current.reset();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);
    
    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
    <div className={s.embla}>
      <div className={s.embla__viewport} ref={emblaRef}>
        <div className={s.embla__container}>
          {slides.map((index) => (
            <div className={s.embla__slide} key={index}>
              <div className={s.embla__slide__inner}>
                <CarouselImgContainer
                    img={media(index)}
                    srcText={carouselInfo[index]}
                />
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