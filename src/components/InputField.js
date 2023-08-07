import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { inputSlice } from "../slice/InputSlice"

export default function InputField(){
    const dispatch=useDispatch()
    const input=useSelector((state)=>{
        return state.inputField.text
    })  
    const [text,setText]=useState(input)

    const onChangeInput=(event)=>{
        const {target:{value}}=event
        setText(value)
    }   
        
    const onClickSubmit=()=>{
        dispatch(inputSlice.actions.send(text))
        setText("")
    }

    return (
        <div>
            <input type="text" onChange={onChangeInput} value={text}/>
            <button onClick={onClickSubmit}>전송</button>
        </div>
    )
}