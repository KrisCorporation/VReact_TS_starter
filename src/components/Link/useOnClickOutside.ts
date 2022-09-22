import { useEffect } from "react"

type Event = MouseEvent | TouchEvent

export function useOnClickOutside(ref:any, handler:any){
    useEffect(()=>{
        const listener = (event:Event) =>{
            const el = ref?.current
            if(!el || el.contains(event?.target as Node) || null ){
                return
            }

            handler(event)
        }

        document.addEventListener('mousedown',listener)

        return ()=>{
            document.addEventListener('mousedown',listener)
        }

    }, [ref,handler])

    
}