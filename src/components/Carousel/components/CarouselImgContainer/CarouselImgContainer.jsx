import s from '../../Carousel.module.css';
import { useTranslation } from 'react-i18next';

const CarouselImgContainer = ({ img, srcText }) => {
    const { t } = useTranslation(['global']);

    return (
        <div 
            className={s.carousel__img__container}
        >
            <img 
                className={s.embla__slide__img}
                src={img}
            />
            <div  
                className={s.embla__slide__img_text}
                style={{backgroundColor: `${srcText?.backgroundColor}`, color: `${srcText?.color}`}}
            >
                <span className={s.embla__slide__img_text_span1}>{srcText?.title}</span>
                <p>{srcText?.description}</p>
                <span className={s.embla__slide__img_text_span2}>{t('See more designs')}</span>
            </div>
        </div>
    )
}

export default CarouselImgContainer;