import React, {useState} from 'react';
import style from './InformationList.module.css';
import x from '../../../media/elements/x.svg';
import arrow from '../../../media/arrows/arrow3.svg';
import List1 from "../Lists/List1";
import List2 from "../Lists/List2";


type propsType = {
    isOpen: boolean
    setIsOpen: (arg: boolean) => void
}

function InformationList(props:propsType) {

    const [currentList, setCurrentList] = useState(1)

    return (
        <div className={props.isOpen? style.wrapper : style.wrapper+' '+style.wrapperHidden}>
            <button className={style.wrapper__buttonCross}
                    onClick={() => props.setIsOpen(false)}><img src={x} className={style.wrapper__x}/></button>
            <div className={style.wrapper__title}>
                <p className={style.wrapper__firstLine}>ПРЕИМУЩЕСТВА</p>
                <p className={style.wrapper__largeTitle}>
                    BREND
                    <span className={style.wrapper__thumbnail}>  XY</span>
                </p>
            </div>
            {currentList===1?<List1 currentList={currentList}/>:<List2 currentList={currentList}/>}
            <div className={style.wrapper__paginator}>
                <img src={arrow} className={style.wrapper__arrowLeft} onClick={() => currentList === 2? setCurrentList(1) : null}/>
                <div className={currentList===1? style.wrapper__circleActive : style.wrapper__circle}></div>
                <div className={currentList===2? style.wrapper__circleActive : style.wrapper__circle}></div>
                <img src={arrow} className={style.wrapper__arrowRight} onClick={() => currentList === 1? setCurrentList(2) : null}/>
            </div>
        </div>
    )
}

export default InformationList;
