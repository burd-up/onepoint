import React, {useRef, useState,} from 'react';
import style from '../SlideTwo.module.css';

type propsType = {
    someText: string
}

function MessageBlock(props: propsType) {

    let startText: Array<string> = [];
    let endText: Array<string> = [];
    props.someText.split(' ').forEach((el, index) => {
        index < 5? startText.push(el+' ') : endText.push(el)
    })

    const text = useRef<HTMLDivElement>(document.createElement("div"))
    const textContainer = useRef<HTMLDivElement>(document.createElement("div"))

    let textHeight = text.current.clientHeight
    let textContainerHeight = textContainer.current.clientHeight

    const [currentLevel, setCurrentLevel] = useState(0) //текущий отступ снизу для блока с текстом

    const handleWheel = (event: any) => {
        if (event.nativeEvent.wheelDeltaY > 0 && (textHeight - textContainerHeight)-currentLevel >= 5
            && (textHeight - textContainerHeight)>0) {
            setCurrentLevel(currentLevel + 10)
        } else if (event.nativeEvent.wheelDeltaY < 0 && currentLevel >= 10) {
            setCurrentLevel(currentLevel - 10)
        } else if (event.nativeEvent.wheelDeltaY < 0 && currentLevel < 10) {
            setCurrentLevel(0)
        } else if (event.nativeEvent.wheelDeltaY > 0 && (textHeight - textContainerHeight)-currentLevel < 10
            && (textHeight - textContainerHeight)>0) {
            setCurrentLevel(textHeight - textContainerHeight)
        }
    } //функция скролинга текстового блока

    const handleOnChange = (event: any) => {
        if(Number(event.target.value)>=0 && Number(event.target.value)<=textContainerHeight) {
            setCurrentLevel(Number(event.target.value*(textHeight-textContainerHeight)/textContainerHeight))
        }
    }



    return (
        <div className={style.slideTwo__messageContainer}>
            {textHeight > textContainerHeight? <div className={style.slideTwo__sliderContainer}>
                <input type="range" min={-50} max={textContainerHeight + 50}
                                                                    onChange={handleOnChange}
                                                                    value={(currentLevel)/(textHeight-textContainerHeight) * textContainerHeight}
                                                                    className={style.slideTwo__slider}/></div> : null}
            <div ref={textContainer} className={style.slideTwo__blockMessage}
                style={textHeight>textContainerHeight? {margin: '0 0 0 3.5%'} : {margin: '0'}}
                 onWheel={handleWheel}>
                <div className={style.slideTwo__opacityBlock}></div>
                <div className={style.slideTwo__whiteBlockTop}></div>
                <div ref={text} style={{bottom: `${currentLevel + textContainerHeight*0.18}px`}} className={style.slideTwo__message}>
                    <span className={style.slideOne__thumbnail}>{startText.join('')}</span>
                    {endText.join(' ')}
                </div>
            </div>
        </div>
    )
}

export default MessageBlock;
