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
    selected?:boolean,
    position: {
        x: number,
        y: number
    },
    pins: {
        id: number,
        label: string,
        side: string,
        selected?: boolean
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
    pinEnd: Pin,
    selected?:boolean
}

type Data = {

    nodes: node[],
    links?: dataLink[]

}

export type {Data, node, dataLink, Pin}