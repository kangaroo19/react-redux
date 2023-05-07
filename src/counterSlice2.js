import { createSlice} from "@reduxjs/toolkit";


const counterSlice2=createSlice({
    name:'counterMinus',
    initialState:{value:0},
    reducers:{
      down:(state,action)=>{
        console.log(action)
        state.value = state.value - action.payload
      }
    }
  })
  
  //name:slice의 이름,내부적으로 중복 피하기 위해 사용되는 고유한 값
  //initialState:초기값
  //reducers:상태변화를 처리하는 함수 정의

  export default counterSlice2
  export const {down}=counterSlice2.actions

  //슬라이스는 기능별로 나누면 될듯