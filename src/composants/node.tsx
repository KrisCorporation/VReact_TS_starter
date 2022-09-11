import { MouseEvent, useEffect, useState } from 'react'
import { node } from '../__types'
import Item from './item'
import './Node.scss'

type Props = {
    dataNode :node
}

export default function Node(props: Props) {

    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [initPos, setInit] = useState({ x: 0, y: 0 })
    const [selected, selectMe] = useState(false)

    function myStyle() {
        console.log(pos)
        return {
            border: selected ? "1px solid #646cff" : undefined,
            transform: "translate( " + pos.x + "px," + pos.y + "px)"
        } 
    }

    useEffect(()=>{
        setPos({x:props.dataNode.position.x,y:props.dataNode.position.y})
    },[])

    function handleMove(e: MouseEvent) {

        if (selected) {
            let X = e.pageX - initPos.x
            let Y = e.pageY - initPos.y

            // console.log(X, Y)
            setPos({ x: X, y: Y })
        }
    }

    function handleDClick(e: MouseEvent) {

        let X = e.pageX - pos.x
        let Y = e.pageY - pos.y
        setInit({ x: X, y:Y })
        // console.log(initPos)
        selectMe(!selected)
    }

    //
    return <div onMouseMove={(e) => handleMove(e)} onDoubleClick={(e) => handleDClick(e)} style={myStyle()} className='node' >
        <div className='nodeheader'>{props.dataNode.title}</div>
        <div className='nodebody'>
            <div className='nodebodyleft'>
                {props.dataNode.pins.map((pin: any) => <Item item={pin} cdt={"r"}/>)}
            </div>
            <div className='nodebodyright'>
                {props.dataNode.pins.map((pin: any) => <Item item={pin} cdt={"l"}/>)}
            </div>
        </div>
    </div>
}

{/* <div className='nodeitem'>OUTPUT 1</div>
            <div className='nodeitem'>OUTPUT 1</div>
            <div className='nodeitem'>OUTPUT 1</div>
            <div className='nodeitem'>OUTPUT 1</div>
            <div className='nodeitem'>OUTPUT 1</div>
            <div className='nodeitem'>OUTPUT 1</div> */}