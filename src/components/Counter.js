import { useDispatch, useSelector } from "react-redux"
import { counterSlice } from "../slice/counterSlice"

export default function Counter(){
    const dispatch=useDispatch()
    const count=useSelector((state)=>{
        // console.log(state)
        return state.counter.value
    })
    const onClick=()=>{
        // dispatch({type:'counter/up',step:2})
        dispatch(counterSlice.actions.up(2)) //액션 함수 안의 값(2)이 payload 프로퍼티로 들어감
    }
    return (
        <div>
            <button onClick={onClick}>+</button> {count}
        </div>
    )
}