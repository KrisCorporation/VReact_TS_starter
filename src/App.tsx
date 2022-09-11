import { useEffect, useState } from 'react'

import Node from './composants/node'
import {myData} from './__data'
import { node } from './__types'

import './App.scss'

import { useDispatch } from 'react-redux'
import {init} from './feature/test/nodesSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(init(myData))
    console.log("myData")
  },[])

  return (
    <div>
      {/* {countCounter} */}
      { myData.nodes.map((node:node)=> <Node key={node.id} dataNode={node}/>)}
      {/* <Node dataNode={myData.nodes[0]}/> */}
    </div>
  )
}

export default App
{/* <Node data={node}/> */}
