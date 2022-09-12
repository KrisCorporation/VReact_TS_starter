
import { useSelector } from 'react-redux'
import './App.scss'

export default function Debug(){

    const debugging = useSelector((state:any)=> JSON.stringify(state.nodeReducer))

    return <div className='debug'>
    <h1>Debug</h1>
    <div className='debuging'>{debugging}</div>
    
    </div>
}