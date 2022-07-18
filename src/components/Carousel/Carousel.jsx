import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import s from './Carousel.module.css'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
  const [ emblaRef, emblaApi ] = useEmblaCarousel( { loop: false }, [Autoplay()] )

    useEffect( () => {
        if( emblaApi ) {
        }
    }, [ emblaApi ] )

  return (
    <div className={ s.embla } ref={emblaRef}>
      <div className={ s.embla__container }>
        <div className={ s.embla__slide }>Slide 1</div>
        <div className={ s.embla__slide }>Slide 2</div>
        <div className={ s.embla__slide }>Slide 3</div>
      </div>
    </div>
  )
}

export default Carousel;