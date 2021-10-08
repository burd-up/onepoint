import React from 'react';
import style from './List1.module.css';

type propsType = {
    currentList:number
}

function List2(props:propsType) {

    return (
        <div className={props.currentList === 2? style.wrapper : style.wrapper+' '+style.wrapperHidden}>
            <div>
                <p className={style.wrapper__textTitle}>04</p>
                <p className={style.wrapper__text}>Mi bibendum neque egestas congue quisque
                    egestas diam</p>
            </div>
            <div>
                <p className={style.wrapper__textTitle}>05</p>
                <p className={style.wrapper__text}>Venenatis lectus magna fringilla urna</p>
            </div>
            <div>
                <p className={style.wrapper__textTitle}>06</p>
                <p className={style.wrapper__text}>Venenatis lectus magna fringilla urna</p>
            </div>
        </div>
    )
}

export default List2;
