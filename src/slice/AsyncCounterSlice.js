import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncUpFetch=createAsyncThunk(
    'AsyncCounterSlice/asyncUpFetch',
    async ()=>{
        const res=await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        )
        const data=await res.json()
        return data
    }
)

export const asyncCounterSlice=createSlice({
    name:'asyncCounterSlice',
    initialState:{
        name:"none",
        status:'Welcome'
    },
    reducers:{
        up:(state,action)=>{
            state.name=state.name+action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncUpFetch.pending, (state,action)=>{
          state.status = 'Loading';
        })
        builder.addCase(asyncUpFetch.fulfilled, (state,action)=>{
          state.name = action.payload.name;
          state.status = 'complete';
        })
        builder.addCase(asyncUpFetch.rejected, (state,action)=>{
          state.status = 'fail';
        })
      }
})