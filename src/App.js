import { useState } from "react";
import Left1 from "./components/Left1";
import Right1 from "./components/Right1";
import {createStore} from 'redux'
import {Provider,useSelector,useDispatch} from 'react-redux'
import {reducer} from './reducer'

const store=createStore(reducer) //store 생성

console.log(store.getState())
function App(){

  return (
    <div id="container">
      <h1>Root : {store.getState().number}</h1>
      <div id="grid">
        {/* provider에 store 프롭 반드시 있어야함  */}
        <Provider store={store}>
          <Left1/>
          <Right1/>
        </Provider>
      </div>
    </div>
  )
}

export default App;






