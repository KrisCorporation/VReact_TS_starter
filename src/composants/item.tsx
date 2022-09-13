import { useDispatch, useSelector } from "react-redux"
import { node } from "../__types"

type Props = {
    arrayIdx: number
    cptIdx: number
    item: {
        id: number,
        label: string,
        side: string

    },
    cdt: string,
    cpt: number
}

import { addOther, initOffset, removeOther, selecPinToggle } from '../feature/test/nodesSlice'
import { useCallback, useEffect, useRef, useState } from "react"

export default function Item(props: Props) {

    const [selected, setSelected] = useState(false)
    const dispatch = useDispatch()

    const elRef = useCallback((node: any) => {
        if (node !== null) {
            Test(node)
        }
    }, []);

    const pinRefresh = useSelector((state:any)=>state.nodeReducer.pinRefresh)
    const testSelected = useSelector((state:any)=>state.nodeReducer.storeNodes.nodes[props.cptIdx].pins[props.arrayIdx].selected)

    // useEffect(()=>{
    //     handleClick()
    // },[testSelected])

    function Test(node: HTMLDivElement) {
        const x = props.cdt == "r" ? node.offsetLeft : node.offsetLeft + node.clientWidth
        const y = node.offsetTop + node.clientHeight / 2;
        dispatch(initOffset({ cptIdx: props.cptIdx, itemIdx: props.arrayIdx, pos: { x: x, y: y } }))
    }

    function myStyle() {
        return {
            color: testSelected ? '#57A3E5' : undefined,
            fontWeight: testSelected ? 'bold' : undefined
        }
    }

    function prepareData() {
        return {
            id: props.cpt.toString() + "-" + props.item.id.toString(),
            nodeId: props.cpt,
            itemId: props.item.id,
        }
    }

    function handleClick() {
        !testSelected ? dispatch(addOther(prepareData())) : undefined,
        testSelected ? dispatch(removeOther(prepareData())) : undefined
        dispatch(selecPinToggle({ cptIdx: props.cptIdx, itemIdx: props.arrayIdx, selectedValue: !testSelected }))
        console.log(testSelected)
        
        // setSelected(!selected)
    }

    if (props.item.side == props.cdt)
        return <div ref={elRef} style={myStyle()} onClick={() => handleClick()} key={props.item.id} className='nodeitem'>{props.item.label} {pinRefresh}</div>
    else
        return null
}