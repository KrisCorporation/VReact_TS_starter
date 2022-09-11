
import {Data , node, dataLink} from './__types'

const cpt: node = {
  id:1,
  title: "IO318",
  position: {
    x: 300,
    y: 300
  },
  pins: [
    {
      id: 1,
      label: "Ouput 1",
      side: "r"
    },
    {
      id: 2,
      label: "Ouput 2",
      side: "r"
    },
    {
      id: 3,
      label: "Ouput 3",
      side: "r"
    },
    {
      id: 4,
      label: "Ouput 4",
      side: "l"
    },
    {
      id: 5,
      label: "Ouput 5",
      side: "l"
    },
    {
      id: 6,
      label: "Coucou",
      side: "r"
    },
  ]
}

const cpt2: node = {
  id: 2,
  title: "IO300",
  position: {
    x: 0,
    y: 0
  },
  pins: [
    {
      id: 1,
      label: "Ouput 1",
      side: "l"
    },
    {
      id: 2,
      label: "Ouput 2",
      side: "l"
    },
    {
      id: 3,
      label: "Ouput 3",
      side: "l"
    },
    {
      id: 4,
      label: "Ouput 4",
      side: "l"
    },
    {
      id: 5,
      label: "Ouput 5",
      side: "l"
    },
    {
      id: 6,
      label: "Ouput 5",
      side: "l"
    }
  ]
}

const lk1: dataLink = {
  id: 1,
  label: "toto",
  color: "red",
  pinStart: {
    nodeId: 1,
    pinId: 1
  },
  pinEnd: {
    nodeId: 2,
    pinId: 3
  }
}

const myData: Data = {

  nodes: [
    cpt,
    cpt2
  ],
  links: [
    lk1
  ]

}

export { myData }