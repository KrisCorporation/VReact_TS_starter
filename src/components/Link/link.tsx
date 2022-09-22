import { MouseEvent, useEffect, useRef, useState } from 'react'
import './link.scss'
import { useOnClickOutside } from './useOnClickOutside'

import { getPath, posText } from './utils'

export default function Link(props) {

    const textRef = useRef(null)
    const [textWH, setTextWH] = useState({ x: 0, y: 0, width: 0, height: 0 })
    const [classLink, setclassLink] = useState(false)
    const [contextShow, setContextShow] = useState(false)
    const [contextPos, setContextPos] = useState({ x: 0, y: 0 })


    useEffect(() => {
        textRef != null ? setTextWH(textRef.current.getBBox()) : undefined
    }, [])

    // const props.label = "Animated Links"


    function moveText(side: string) {
        return posText(side, props.position, textWH)
    }

    function handleClick() {
        setclassLink(!classLink)
    }

    function path() {
        return getPath(props.position, textWH.width + 10)
    }

    function openContext(e: MouseEvent) {
        e.preventDefault()
        setContextShow(true)
        setContextPos({ x: e.pageX, y: e.pageY })
        console.log("context")
    }

    function linkClass() {
        return classLink ? 'path selected' : 'path'
    }

    function textClass() {
        return classLink ? 'linkText selected' : 'linkText'
    }

    function contextStyle() {
        return { transform: "translate( " + contextPos.x + "px," + contextPos.y + "px)" }
    }

    const refContext = useRef(null)
    useOnClickOutside(refContext,contextClose)

    function contextClose() {
        setContextShow(false)
    }

    return <>

        <path onContextMenu={(e: MouseEvent) => openContext(e)} onClick={() => handleClick()} className={linkClass()} d={path()}></path>
        {Text('p1')}
        {Text('p2')}
        
        {contextShow && <foreignObject width='100%' height='100%'>
            <div ref={refContext} style={contextStyle()} className="context">
                <div className='contextItem'>{props.label}</div>
                <hr/>
                <div className='contextItem'>{classLink ? "Selected" : "Unselected"}</div>
            </div>
            </foreignObject>}
    </>

    function Text(point: string) {
        return <g transform={moveText(point)} onClick={() => handleClick()} onContextMenu={(e: MouseEvent) => openContext(e)}>
            <rect x={textWH.x} y={textWH.y} height={textWH.height} width={textWH.width} className='linkTextBck'></rect>
            <text ref={textRef} className={textClass()}>{props.label}</text>
        </g>
    }
}