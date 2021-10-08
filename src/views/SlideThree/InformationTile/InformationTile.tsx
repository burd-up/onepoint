import React from 'react';
import style from './InformationTile.module.css';
import icon1 from '../../../media/elements/iconPlate.svg';
import icon2 from '../../../media/elements/iconCalendar.svg';

type propsType = {
    setIsOpen: (arg: boolean) => void
}

function InformationTile(props:propsType) {

    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__block1}>
                <img className={style.wrapper__icon1} src={icon1}/>
                <p className={style.wrapper__text1}>Ehicula ipsum a arcu
                cursus vitae. Eu non
                diam phasellus
                vestibulum lorem sed
                    risus ultricies</p>
            </div>
            <div className={style.wrapper__block2}>
                <img className={style.wrapper__icon2} src={icon2}/>
                <p className={style.wrapper__text2}>
                    A arcu
                    cursus vitae</p>
            </div>
            <div className={style.wrapper__block3} onClick={() => props.setIsOpen(true)}>
                <div className={style.wrapper__buttonCircle}>
                    <div className={style.wrapper__cross}></div>
                    <div className={style.wrapper__cross1}></div>
                </div>
                <div className={style.wrapper__buttonText}>Подробнее</div>
            </div>
        </div>
    )
}

export default InformationTile;
