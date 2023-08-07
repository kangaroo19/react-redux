import { useDispatch, useSelector } from "react-redux"
import { counterSlice } from "../slice/CounterSlice"

export default function Counter(){
    const dispatch=useDispatch()
    const count=useSelector((state)=>{ //useSelector훅 사용해 store에 저장된 값 가져옴
        // console.log(state)
        return state.counter.value
    })
    const text=useSelector((state)=>{
        return state.inputField.text
    })
    const onClickPlus=()=>{
        // dispatch({type:'counter/up',step:2})
        dispatch(counterSlice.actions.up(2)) //액션 함수 안의 값(2)이 payload 프로퍼티로 들어감
    }
    const onClickMinus=()=>{
        dispatch(counterSlice.actions.down(2))
    }
    return (
        <div>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
            <div>
                {count}
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}