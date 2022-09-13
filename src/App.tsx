import { MouseEvent, useEffect, useState } from 'react'

import Node from './composants/node'
import { myData } from './__data'
import { dataLink, node } from './__types'
import { useSelector } from "react-redux";

import './App.scss'

import { useDispatch } from 'react-redux'
import { addLink, changeScreenPos, forcePinStatus, init,resetPinStatus } from './feature/test/nodesSlice'
import Link from './composants/link'
import dataPreparator from './dataPreparator';

function App() {
  const [mousePos, setmousePos] = useState({ x: 0, y: 0 })
  const dispatch = useDispatch()

  useEffect(() => {

    // const myData.nodes = myData.nodes.map((node)=>{[...node, {selected:false}] })
    // console.log(myData)
    let data = dataPreparator(myData)
    console.log(data)
    dispatch(init(data))

  }, [])

  function handleClick() {

    if (SelectedPin.length >= 2) {
      let pinSelected = [ ...SelectedPin ]

      let master = pinSelected.shift()
      let slaves = pinSelected

      // dispatch(forcePinStatus({ cptIdx: master.cptIdx, itemIdx: props.arrayIdx, selectedValue: !testSelected }))

      slaves.map((slave: any) => {

        const NewLink = {
          id: new Date().valueOf(),
          label: "Machin",
          color: "#0d6efd",
          pinStart: {
            nodeId: master.nodeId,
            pinId: master.itemId
          },
          pinEnd: {
            nodeId: slave.nodeId,
            pinId: slave.itemId
          }
        }
        dispatch(addLink(NewLink))
        dispatch(resetPinStatus())
      })
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
