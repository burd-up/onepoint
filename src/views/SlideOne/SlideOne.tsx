import React from 'react';
import style from './SlideOne.module.css'
import wand from '../../media/elements/wand.svg';
import sperm from '../../media/elements/sperm.svg';
import circle1 from '../../media/elements/circle1.svg';
import circle2 from '../../media/elements/circle2.svg';
import circle3 from '../../media/elements/circle3.svg';
import circle4 from '../../media/elements/circle4.svg';
import arrow from '../../media/arrows/slide1.svg';

type propsType = {
    setCurrentSlide: (slide: number) => void
}

function SlideOne(props:propsType) {

    return (
        <div className={style.slideOne}>
            <img className={style.slideOne__wand} src={wand}/>
            <img className={style.slideOne__circle1} src={circle1}/>
            <img className={style.slideOne__circle2} src={circle2}/>
            <img className={style.slideOne__circle3} src={circle3}/>
            <img className={style.slideOne__circle4} src={circle4}/>

            <div className={style.slideOne__title}>
                <p className={style.slideOne__firstLine}>ПРИВЕТ,</p>
                <h1 className={style.slideOne__largeTitle}>ЭТО
                    <span className={style.slideOne__thumbnail}>  НЕ</span><img className={style.slideOne__sperm} src={sperm}/><br/>
                    КОММЕРЧЕСКОЕ <br/>
                    <div className={style.slideOne__bottomLine}>
                        ЗАДАНИЕ
                        <img onClick={() => {props.setCurrentSlide(2)}}
                             className={style.slideOne__button} src={arrow}/>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default SlideOne;
