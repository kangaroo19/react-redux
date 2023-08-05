import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Right3(){
    const dispatch=useDispatch()
    const [text,setText]=useState("")
    
    // const onChange=(event)=>{ 전송버튼 있을때
    //     const {target:{value}}=event
    //     setText(value)
    // }
    const onChange = (event) => {
        const { target: { value } } = event
        setText(value)
        dispatch({ type: 'SUBMIT', value }) // value를 바로 dispatch에 전달
    }

    return (
        <div>
            <h1>Right3</h1>
            <input 
                type="button" 
                value="+"
                onClick={()=>{
                    dispatch({type:'PLUS'})
                }}/>
                {/* <input type="text" onChange={onChange} value={text}/>
                <button onClick={()=>{
                    dispatch({type:'SUBMIT',value:text})
                }}>전송</button> */}

                {/* <input type="text" onChange={(event)=>{
                    const {target:{value}}=event
                    setText(value)
                    dispatch({type:'SUBMIT',value:text})
                }}/> */}
                
                <input type="text" onChange={onChange} value={text}/>

        </div>
    )   
}

//onClick={onIncrease()} 오류나는 이유
//컴포넌트가 렌더링 될때마다 onIncrease함수가 호출됨
