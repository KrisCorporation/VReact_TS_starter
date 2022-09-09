import { useEffect, useState } from 'react'
import './Node.css'

function Item(item: any, cdt: string) {

    if (item.side == cdt)
        return <div key={item.id} className='nodeitem'>{item.label}</div>

}

function Pos(position: any) {
    return 'translate(' + position.x + 'px,' + position.y + 'px)'
}

// style={Pos(props.data.position)}

export default function Node(props: any) {

    const [pos, setPos] = useState({ x: "0", y: "0" })
    const [initPos, setInit] = useState({ x: "0", y: "0" })

    // function handleClick(e:Event){

    //     console.log(e)
    //     setPos({x: e.pageX, y:e.pageY})

    // }

    const [selected, selectMe] = useState(false)

    function myStyle() {

        console.log(pos)
        return {
            border: selected ? "1px solid #646cff" : undefined,
            transform: "translate( " + pos.x + "px," + pos.y + "px)"
        }
        

    }

    useEffect(()=>{
        setPos({x:props.data.position.x,y:props.data.position.y})
    },[])

    function handleMove(e: any) {

        if (selected) {
            let X = e.pageX - parseInt(initPos.x)
            let Y = e.pageY - parseInt(initPos.y)

            console.log(X, Y)
            setPos({ x: X.toString(), y: Y.toString() })
        }
    }

    function handleDClick(e: any) {

        let X = e.pageX - parseInt(pos.x)
        let Y = e.pageY - parseInt(pos.y)
        setInit({ x: X.toString(), y:Y.toString() })
        console.log(initPos)
        selectMe(!selected)
    }

    //
    return <div onMouseMove={(e) => handleMove(e)} onDoubleClick={(e) => handleDClick(e)} style={myStyle()} className='node' >
        <div className='nodeheader'>{props.data.title}</div>
        <div className='nodebody'>
            <div className='nodebodyleft'>
                {props.data.pins.map((pin: any) => Item(pin, "r"))}
            </div>
            <div className='nodebodyright'>
                {props.data.pins.map((pin: any) => Item(pin, "l"))}
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