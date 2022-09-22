import { useEffect, useState } from 'react';
import './nodeTest.scss'


export default function nodetest(props) {

    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [initPos, setInit] = useState({ x: 0, y: 0 });
    const [selected, selectMe] = useState(false);

    function myStyle(): { transform: string; } {
        return { transform: "translate( " + pos.x + "px," + pos.y + "px)" }
    }

    function handleDClick(e: MouseEvent) {
        let X = e.pageX - pos.x;
        let Y = e.pageY - pos.y;
        setInit({ x: X, y: Y });
        // dispatch(setSelectedNode(id))
        selectMe(!selected);
    }

    useEffect(() => {
        if (selected) {
            let X = props.posMouse.x - initPos.x;
            let Y = props.posMouse.y - initPos.y;
            // dispatch(changePosition([props.arrayIdx, { x: X, y: Y }]))
            setPos({ x: X, y: Y });
        }
    }, [props.posMouse]);

    return <>
        <div onDoubleClick={(e) => handleDClick(e)} className="bodyNode" style={myStyle()} >
            <div className="topNode"> ^ </div>
            <div className="rightNode"> &gt; </div>
            <div className="bottomNode">v</div>
            <div className="leftNode"> &lt;  </div>
        </div>
    </>
}