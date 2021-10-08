import React from 'react';
import style from './SlideTwo.module.css';
import sperm from '../../media/elements/sperm2.svg';
import sperm2 from '../../media/elements/sperm22.svg';
import MessageBlock from "./MessageBlock/MessageBlock";
import {someText} from "../../utils/someText";

type propsType = {
    currentSlide: number
}

function SlideTwo(props:propsType) {

    return (
        <div className={style.slideTwo}>
            <img className={props.currentSlide === 2?style.sperm1+' '+style.sperm1_animation:style.sperm1} src={sperm}/>
            <img className={props.currentSlide === 2?style.sperm2+' '+style.sperm2_animation:style.sperm2} src={sperm}/>
            <img className={props.currentSlide === 2?style.sperm3+' '+style.sperm3_animation:style.sperm3} src={sperm}/>
            <img className={props.currentSlide === 2?style.sperm4+' '+style.sperm4_animation:style.sperm4} src={sperm2}/>
            <img className={props.currentSlide === 2?style.sperm5+' '+style.sperm5_animation:style.sperm5} src={sperm}/>
            <p className={style.slideTwo__title}>ТЕКСТ <br/> СООБЩЕНИЯ</p>
            <MessageBlock someText={someText}/>
        </div>
    )
}

export default SlideTwo;
