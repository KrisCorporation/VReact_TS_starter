import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dataLink } from "../__types";
import "./link.scss";

type Props = {
  DataLink: dataLink
};








export default function Link(props: Props) {

  const [selected, setSelected] = useState(false)
  // 
  // const [positions, setPositions] = useState({})


  // useEffect(()=>{
  //   positionFinder()
  // },[Offset])

  // function positionFinder(){
  //   const startId = props.DataLink.pinStart.nodeId.toString() + '-' + props.DataLink.pinStart.pinId.toString()
  //   const endId = props.DataLink.pinEnd.nodeId.toString() + '-' + props.DataLink.pinEnd.pinId.toString()

  //   console.log(startId,Offset)

  //   const itemStart = Offset.filter((item:any)=>item.id == startId)
  //   console.log(itemStart)

  // }


  const Nodes = useSelector((state:any) => state.nodeReducer.storeNodes.nodes)

  const [startPin, setStartPin] = useState({itemIdx:2,nodeIdx:0})
  const [endPin, setEndPin] = useState({itemIdx:3,nodeIdx:0})

  useEffect(()=>{

    var tmp = Nodes.findIndex((node:any)=>node.id == props.DataLink.pinStart.nodeId)
    var tmp2 = Nodes[tmp].pins.findIndex((pin:any)=>pin.id == props.DataLink.pinStart.pinId)

    setStartPin({itemIdx:tmp2,nodeIdx:tmp})

    var tmp3 = Nodes.findIndex((node:any)=>node.id == props.DataLink.pinEnd.nodeId)
    var tmp4 = Nodes[tmp3].pins.findIndex((pin:any)=>pin.id == props.DataLink.pinEnd.pinId)

    setEndPin({itemIdx:tmp4,nodeIdx:tmp3})

  },[])

  // Nodes[startPin.nodeIdx].position.x + Nodes[startPin.nodeIdx].pins[startPin.itemIdx].x

  const Info: any = {
    // start point position [x, y, orientation]
    start: [Nodes[startPin.nodeIdx].position.x + Nodes[startPin.nodeIdx].pins[startPin.itemIdx].x,
    Nodes[startPin.nodeIdx].position.y + Nodes[startPin.nodeIdx].pins[startPin.itemIdx].y, 
    Nodes[startPin.nodeIdx].pins[startPin.itemIdx].side == 'r' ? -1 : 1],
    // end point position [x, y, orientation]
    end: [Nodes[endPin.nodeIdx].position.x + Nodes[endPin.nodeIdx].pins[endPin.itemIdx].x,
    Nodes[endPin.nodeIdx].position.y + Nodes[endPin.nodeIdx].pins[endPin.itemIdx].y, 
    Nodes[endPin.nodeIdx].pins[endPin.itemIdx].side == 'r' ? -1 : 1]
  }


  function linkPath() {
    let cx = Info.start[0],
      cy = Info.start[1],
      ex = Info.end[0],
      ey = Info.end[1];
    let sdx1 = Info.start[2],
      sdx2 = Info.end[2];
    let x1 = cx + 100 * sdx1,
      y1 = cy + 0,
      x2 = ex + 100 * sdx2,
      y2 = ey + 0;
    return `M ${cx}, ${cy} C ${x1}, ${y1}, ${x2}, ${y2}, ${ex}, ${ey}`;
  }


  function handleClick() {
    console.log("Link")
    setSelected(!selected)
  }

  function myStyle() {
    return {
      stroke: selected ? '#57A3E5' : undefined,
      strokeWidth: selected ? '7' : undefined,
    }
  }


  return (

    <path
      onClick={() => handleClick()}
      style={myStyle()}
      d={linkPath()}
      stroke={props.DataLink.color}
      fill="transparent"
    ></path>
  );
}
