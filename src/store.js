//configureStore로 store를 만듦

import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slice/CounterSlice"
import { inputSlice } from "./slice/InputSlice"
import { asyncCounterSlice } from "./slice/AsyncCounterSlice"


export const store=configureStore({
    reducer:{
      counter:counterSlice.reducer,
      inputField:inputSlice.reducer,
      asyncCounter:asyncCounterSlice.reducer,
    }
  })
  console.log(counterSlice)