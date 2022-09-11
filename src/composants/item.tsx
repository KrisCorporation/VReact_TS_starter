import { node } from "../__types"

type Props = {
    item: {
        id:number, 
        label:string, 
        side:string

    }, 
    cdt: string
}

export default function Item(props:Props) {
    
    if (props.item.side == props.cdt)
        return <div key={props.item.id} className='nodeitem'>{props.item.label}</div>
    else 
        return null
}