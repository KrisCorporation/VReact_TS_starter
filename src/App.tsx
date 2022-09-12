import { MouseEvent, useEffect, useState } from 'react'

import Node from './composants/node'
import { myData } from './__data'
import { dataLink, node } from './__types'
import { useSelector } from "react-redux";

import './App.scss'

import { useDispatch } from 'react-redux'
import { addLink, changeScreenPos, init } from './feature/test/nodesSlice'
import Link from './composants/link'

function App() {
  const [mousePos, setmousePos] = useState({ x: 0, y: 0 })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init(myData))
  }, [])

  function handleClick() {

    if (SelectedPin.length >= 2) {
      const leader = SelectedPin[0]
      const slave =SelectedPin[1]
      const NewLink = {
        id: Offset.links.length + 1,
        label: "Machin",
        color: "#0d6efd",
        pinStart: {
          nodeId: leader.nodeId,
          pinId: leader.itemId
        },
        pinEnd: {
          nodeId: slave.nodeId,
          pinId: slave.itemId
        }
      }

      dispatch(addLink(NewLink))
    }

  }

  const Offset = useSelector((state: any) => state.nodeReducer.storeNodes)
  const SelectedPin = useSelector((state: any) => state.nodeReducer.selectedPin)

  function handleMouseMove(e: MouseEvent) {
    setmousePos({ x: e.pageX, y: e.pageY })
    // dispatch(changeScreenPos({x:e.pageX, y:e.pageY}))
  }

  if (Offset.nodes != undefined) {
    return (
      <>
        <div className='controlers'>
          <button onClick={() => handleClick()}>AddLink</button>
        </div>
        <div className='test' onMouseMove={(e) => handleMouseMove(e)}>
          <svg className="link">
            <g>
              {Offset.links?.map((link: dataLink) => <Link key={link.id} DataLink={link} />)}
            </g>
          </svg>
          {Offset.nodes.map((node: node, idx: number) => <Node key={node.id} dataNode={node} arrayIdx={idx} posMouse={mousePos} />)}
        </div>
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default App
