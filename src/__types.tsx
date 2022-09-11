// type link = {
//   id: number,
//   label: string,
//   position: {
//     strX: number,
//     strY: number,
//     endX: number
//     endY: number
//   },
//   color: string
// }

type node = {
    id:number,
    title: string,
    position: {
        x: number,
        y: number
    },
    pins: {
        id: number,
        label: string,
        side: string
    }[]
}


type Pin = {
    nodeId: number,
    pinId: number
}

type dataLink = {
    id: number,
    label: string,
    color: string,
    pinStart: Pin,
    pinEnd: Pin
}

type Data = {

    nodes: node[],
    links?: dataLink[]

}

export type {Data, node, dataLink, Pin}