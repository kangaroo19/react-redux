import { useDispatch, useSelector } from "react-redux"
import { asyncCounterSlice, asyncUpFetch } from "../slice/AsyncCounterSlice"

export default function AsyncCounter(){
    const dispatch=useDispatch()
    const name=useSelector(state=>{
        return state.asyncCounter.name
    })
    const status=useSelector(state=>{
        return state.asyncCounter.status
    })
    return (
        <div>
            <button onClick={()=>{
                    dispatch(asyncUpFetch())
                }}>
                +async fetch
            </button>
            <div>{name} | {status}</div>
        </div>
    )
}