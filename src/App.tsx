import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Node from './composants/node'

const cpt = {
  title: "IO318",
  position: {
    x: "300",
    y: "300"
  },
  pins:[
    { 
      id :1,
      label : "Ouput 1",
      side : "r"
    },
    { 
      id :2,
      label : "Ouput 2",
      side : "r"
    },
    { 
      id :3,
      label : "Ouput 3",
      side : "r"
    },
    { 
      id :4,
      label : "Ouput 4",
      side : "l"
    },
    { 
      id :5,
      label : "Ouput 5",
      side : "l"
    },
  ]
}

const cpt2 = {
  title: "IO300",
  position: {
    x: "0",
    y: "0"
  },
  pins:[
    { 
      id :1,
      label : "Ouput 1",
      side : "l"
    },
    { 
      id :2,
      label : "Ouput 2",
      side : "l"
    },
    { 
      id :3,
      label : "Ouput 3",
      side : "l"
    },
    { 
      id :4,
      label : "Ouput 4",
      side : "l"
    },
    { 
      id :5,
      label : "Ouput 5",
      side : "l"
    },
  ]
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      < Node data={cpt}/>
      < Node data={cpt2}/>
    </div>
  )
}

export default App
