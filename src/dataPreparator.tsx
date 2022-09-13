import { Data } from "./__types";

export default function dataPreparator(data:Data){

    data.nodes.forEach(node=>{
        node.pins.forEach(pin=>{
            //pin = ({...pin, selected:false});
            // try{pin.selected = false}catch{}
            pin.selected = false
        })
    })

    data.links?.forEach(link=>{
        link.selected = false
    })

    console.log(data)

    return data
}