import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePosition, setSelectedNode } from "../feature/test/nodesSlice";
import { node } from "../__types";
import Item from "./item";
import "./Node.scss";

type Props = {
  arrayIdx : number
  dataNode: node;
  posMouse: {
    x: number;
    y: number;
  };
};

export default function Node(props: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [initPos, setInit] = useState({ x: 0, y: 0 });
  const [id, setId] = useState(0)
  const [selected, selectMe] = useState(false);

  const dispatch = useDispatch()

  function myStyle() {
    return {
      boxShadow: selected ? "5px 5px 9px #57A3E5" : undefined,
      transform: "translate( " + pos.x + "px," + pos.y + "px)",
    };
  }

  useEffect(() => {
    setPos({ x: props.dataNode.position.x, y: props.dataNode.position.y });
    setId(props.dataNode.id)
  }, []);

  useEffect(() => {
    if (selected) {
      let X = props.posMouse.x - initPos.x;
      let Y = props.posMouse.y - initPos.y;
      dispatch(changePosition([props.arrayIdx,{ x: X, y: Y }]))
      setPos({ x: X, y: Y });
    }
  }, [props.posMouse]);

  function handleDClick(e: MouseEvent) {
    let X = e.pageX - pos.x;
    let Y = e.pageY - pos.y;
    setInit({ x: X, y: Y });
    dispatch(setSelectedNode(id))
    selectMe(!selected);
  }

  return (
    <div style={myStyle()} className="node">
      <div onDoubleClick={(e) => handleDClick(e)} className="nodeheader">
        {props.dataNode.title}
      </div>
      <div className="nodebody">
        <div className="nodebodyleft">
          {props.dataNode.pins.map((pin: any,idx:number) => (
            <Item key={pin.id} item={pin} cdt={"r"} cpt={props.dataNode.id} cptIdx={props.arrayIdx} arrayIdx={idx}/>
          ))}
        </div>
        <div className="nodebodyright">
          {props.dataNode.pins.map((pin: any,idx:number) => (
            <Item key={pin.id} item={pin} cdt={"l"} cpt={props.dataNode.id} cptIdx={props.arrayIdx} arrayIdx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}