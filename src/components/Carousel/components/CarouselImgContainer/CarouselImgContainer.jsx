import s from '../../Carousel.module.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CarouselImgContainer = ({ img, srcText, example }) => {
    const { t } = useTranslation(['home']);

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
                <span className={s.embla__slide__img_text_span1}>
                    {srcText?.name}
                    {srcText?.subtitle && <span className={s.embla__slide__img_text_subtitle}>{srcText?.subtitle}</span>}
                </span>
                <p>{srcText?.description}</p>

                {!example? 
                    <NavLink 
                        to={`services/${srcText?.name.toLowerCase().replaceAll(' ', '-')}`}
                        style={{color: `${srcText?.color}`}}
                    >
                    <span className={s.embla__slide__img_text_span2}>{t('carouselLink')}</span>
                    </NavLink>:
                    <span 
                        className={s.embla__slide__img_text_span2}
                        style={{color: `${srcText?.color}`, cursor: 'pointer'}}
                    >{t('carouselLink')}</span>
                }

            </div>
        </div>
    )
}

export default CarouselImgContainer;