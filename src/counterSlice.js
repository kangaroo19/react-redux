import { createSlice} from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'counterPlus',
    initialState:{value:0},
    reducers:{
      up:(state,action)=>{
        console.log(action)
        state.value = state.value + action.payload
      }
    }
  })
  
  //name:slice의 이름,내부적으로 중복 피하기 위해 사용되는 고유한 값
  //initialState:초기값
  //reducers:상태변화를 처리하는 함수 정의

  export default counterSlice
  export const {up}=counterSlice.actions