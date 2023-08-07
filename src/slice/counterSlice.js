//createSlice로 작은 store를 만듦

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter', //슬라이스 이름
    initialState:{value:0},  //초기값
    reducers:{  //액션 타입별로 함수 정의
        up:(state,action)=>{
            console.log(action)
            state.value=state.value+action.payload
        },
        down:(state,action)=>{
            state.value=state.value-action.payload
        }
    }
})



//createSlice함수는 name,initialState,reducers 세개 정의

//1. name : 내부적으로 중복을 피하기위해 사용되는 고유한 값
//2. initialState : 기본값이면서 동시에 상태관리에 사용됨
//3. reducers : 상태변화를 처리하는 함수 정의   

