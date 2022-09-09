import { useState } from 'react'
import './Node.css'

function Item(item:any,cdt:string){

    if(item.side == cdt)
     return <div key={item.id} className='nodeitem'>{item.label}</div>
    
}

function Pos(position:any){
    return 'translate(' + position.x + 'px,'+ position.y+'px)'
}

// style={Pos(props.data.position)}

export default function Node(props:any) {

    const [pos, setPos] = useState({x:"0",y:"0"})

    // function handleClick(e:Event){

    //     console.log(e)
    //     setPos({x: e.pageX, y:e.pageY})

    // }

    const [selected, selectMe] = useState(false)

    function myStyle(){ 

        console.log(selected)
        return  {border: selected ? "5px solid #646cff" : undefined}
    
    }

    function handleMove(){
        
    }

    //
    return <div onMouseMove={()=>handleMove()} onDoubleClick={()=>selectMe(!selected)} style={myStyle()} className='node' >
        <div className='nodeheader'>{props.data.title}</div>
        <div className='nodebody'>
            <div className='nodebodyleft'>
                {props.data.pins.map((pin:any)=>Item(pin,"r") )}
            </div>
            <div className='nodebodyright'>
                {props.data.pins.map((pin:any)=>Item(pin,"l") )}
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