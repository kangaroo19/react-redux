//createSlice로 작은 store를 만듦

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter', //슬라이스 이름
    initialState:{value:0},  //초기값
    reducers:{  //액션 타입별로 함수 정의
        up:(state,action)=>{
            // console.log(action)
            state.value=state.value+action.payload
        },
    }
})

