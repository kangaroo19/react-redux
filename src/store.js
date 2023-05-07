import { createSlice,configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import counterSlice2 from "./counterSlice2";
//configureStore 통해 스토어를 만들어준다
const store=configureStore({
  reducer:{
    counter1:counterSlice.reducer,
    counter2:counterSlice2.reducer
  }
})


export default store