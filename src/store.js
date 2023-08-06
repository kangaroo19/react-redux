//configureStore로 store를 만듦

import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slice/counterSlice"


export const store=configureStore({
    reducer:{
      counter:counterSlice.reducer
    }
  })
  console.log(counterSlice)