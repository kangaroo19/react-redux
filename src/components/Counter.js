import { useDispatch, useSelector } from "react-redux"

export default function Counter(){
    const dispatch=useDispatch()
    const count=useSelector(state=>state.value)
    const onClick=()=>{
        dispatch({type:'up',step:2})
    }
    return (
        <div>
            <button onClick={onClick}>+</button> {count}
        </div>
    )
}