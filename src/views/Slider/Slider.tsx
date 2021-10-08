import React, {useState} from 'react';
import style from './Slider.module.css'
import SlideOne from "../SlideOne/SlideOne";
import SlideTwo from "../SlideTwo/SlideTwo";
import SlideThree from "../SlideThree/SlideThree";
import {eventSwipe} from "../../utils/eventSwipe";
import arrowRight from '../../media/arrows/right.svg';
import arrowLeft from '../../media/arrows/left.svg';
import home from '../../media/elements/home.svg';
import label from '../../media/elements/label.svg';

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(1)

    //щпределяем позицию нашего элемента Swipe в зависимости от текущего слайда
    let styleSwipe = style.slide1
    if(currentSlide ===2) {
        styleSwipe = style.slide2
    } else if (currentSlide ===3) {
        styleSwipe = style.slide3
    }

    //функции для отслеживания свайпа
    const swipe = eventSwipe
    const handleSwipeStart = (event: any) => {
        swipe.startX = event.changedTouches[0].clientX
    }
    const handleSwipeEnd = (event: any) => {
        swipe.endX = event.changedTouches[0].clientX
        if(swipe.isSwipe() === 'left' && currentSlide < 3){
            setCurrentSlide(currentSlide+1)
        } else if(swipe.isSwipe() === 'right' && currentSlide > 1){
            setCurrentSlide(currentSlide-1)
        }
    }

    return (
        <div className={style.slider + ' ' + styleSwipe} onTouchStart={handleSwipeStart} onTouchEnd={handleSwipeEnd}>
            {/*кнопка домой и нижний логотип*/}
            <img className={style.slider__homeImg} src={home} alt={'home button'}/>
            <button onClick={() => { setCurrentSlide(1)}} className={style.slider__homeButton}></button>
            <img className={style.slider__labelImg} src={label} alt={'label'}/>
            {/*кнопки для пролистывания слайдов при отображении с компьютера*/}
            {currentSlide !== 3? <img onClick={() => setCurrentSlide(currentSlide+1)} alt={'to the right'}
                                      className={style.slider__imgArrow + ' ' + style._right} src={arrowRight}/> : null}
            {currentSlide !== 1? <img onClick={() => setCurrentSlide(currentSlide-1)} alt={'to the left'}
                                      className={style.slider__imgArrow + ' ' + style._left} src={arrowLeft}/> : null}

            <SlideOne setCurrentSlide={setCurrentSlide}/>
            <SlideTwo currentSlide={currentSlide}/>
            <SlideThree/>
        </div>
    )
}

export default Slider;
