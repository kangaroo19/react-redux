import { createSlice } from "@reduxjs/toolkit";

export const inputSlice=createSlice({
    name:'input',
    initialState:{text:""},
    reducers:{
        send:(state,action)=>{ //send는 액션 이름
            state.text=action.payload
        }
    }
})

//createSlice함수는 name,initialState,reducers 세개 정의

//1. name : 내부적으로 중복을 피하기위해 사용되는 고유한 값
//2. initialState : 기본값이면서 동시에 상태관리에 사용됨
//3. reducers : 상태변화를 처리하는 함수 정의