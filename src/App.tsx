import { MouseEvent, useState } from 'react'
import './App.scss'
import Link from './components/Link/link'
import NodeTest from './components/nodeTest/nodetest'

function AppBackground(){
    return <svg className='appBackground'>
        <pattern id="pattern-0" x="10" y="10" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle className='backgroundDot' cx="0.50" cy="0.50" r="0.50" ></circle>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-0)"></rect>
    </svg>
}

export default function App() {
    const [mousePos, setmousePos] = useState({ x: 0, y: 0 })

    function handleMouseMove(e: MouseEvent) {
        setmousePos({ x: e.pageX, y: e.pageY })
        // dispatch(changeScreenPos({x:e.pageX, y:e.pageY}))
      }

      const position = {
        p1:{
            x:200,
            y:200,
            vx:0,
            vy:-1
        },
        p2:{
            x:400,
            y:500,
            vx:1,
            vy:0
        }
    }  

    const position2 = {
        p1:{
            x:800,
            y:200,
            vx:0,
            vy:1
        },
        p2:{
            x:900,
            y:500,
            vx:1,
            vy:0
        }
    }  

return <>
        <div className="app" onMouseMove={(e:MouseEvent) => handleMouseMove(e)}> 
        <svg className='link'>
            <Link position={position} label="Link number one"/>
            <Link position={position2} label="Link number two"/>
        </svg>
            {/* <NodeTest posMouse={mousePos}/> */}
            {AppBackground()}
        </div>
    </>
}