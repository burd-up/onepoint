import React, {useState} from 'react';
import style from './SlideThree.module.css'
import InformationTile from "./InformationTile/InformationTile";
import bottle from '../../media/elements/bottle.svg';
import InformationList from "./InformationList/InformationList";
import bubble1 from '../../media/elements/bubble1.svg';
import bubble2 from '../../media/elements/bubble2.svg';
import bubble3 from '../../media/elements/bubble3.svg';
import bubble4 from '../../media/elements/bubble4.svg';
import bubble5 from '../../media/elements/bubble5.svg';
import bubble6 from '../../media/elements/bubble6.svg';
import bubble7 from '../../media/elements/bubble7.svg';
import bubble8 from '../../media/elements/bubble8.svg';

function SlideThree() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={style.slideThree}>
            <img src={bubble1} className={style.slideThree__bubble1}/>
            <img src={bubble2} className={style.slideThree__bubble2}/>
            <img src={bubble3} className={style.slideThree__bubble3}/>
            <img src={bubble4} className={style.slideThree__bubble4}/>
            <img src={bubble5} className={style.slideThree__bubble5}/>
            <img src={bubble6} className={style.slideThree__bubble6}/>
            <img src={bubble7} className={style.slideThree__bubble7}/>
            <img src={bubble8} className={style.slideThree__bubble8}/>

            <img className={style.slideThree__bottle} src={bottle}/>
            <div className={style.slideThree__title}>
                <p className={style.slideThree__firstLine}>КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
                <p className={style.slideThree__largeTitle}>
                    BREND
                    <span className={style.slideThree__thumbnail}>  XY</span>
                </p>
            </div>
            <InformationTile setIsOpen={setIsOpen}/>
            <InformationList isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default SlideThree;
