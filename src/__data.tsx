
import {Data , node, dataLink} from './__types'

const cpt: node = {
  id:1,
  title: "IO318",
  position: {
    x: 400,
    y: 120
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

const cpt3: node = {
  id: 3,
  title: "IO3000",
  position: {
    x: 780,
    y: 80
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
    pinId: 2
  },
  pinEnd: {
    nodeId: 2,
    pinId: 3
  }
}

const lk2: dataLink = {
  id: 2,
  label: "truc",
  color: "green",
  pinStart: {
    nodeId: 3,
    pinId: 1
  },
  pinEnd: {
    nodeId: 1,
    pinId: 5
  }
}

const myData: Data = {

  nodes: [
    cpt,
    cpt2,
    cpt3
  ],
  links: [
    lk1,
    lk2
  ]

}

export { myData }