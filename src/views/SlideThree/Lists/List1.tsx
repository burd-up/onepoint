import React from 'react';
import style from './List1.module.css';

type propsType = {
    currentList:number
}

function List1(props:propsType) {

    return (
        <div className={props.currentList === 1? style.wrapper : style.wrapper+' '+style.wrapperHidden}>
            <div>
                <p className={style.wrapper__textTitle}>01</p>
                <p className={style.wrapper__text}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit</p>
            </div>
            <div>
                <p className={style.wrapper__textTitle}>02</p>
                <p className={style.wrapper__text}>Faucibus pulvinar elementum integer enim</p>
            </div>
            <div>
                <p className={style.wrapper__textTitle}>03</p>
                <p className={style.wrapper__text}>Faucibus pulvinar elementum integer enim</p>
            </div>
        </div>
    )
}

export default List1;
