import React,{Component, useState} from "react";
import './App.css'
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import {createStore} from 'redux'
import { Provider,useSelector,useDispatch, connect } from "react-redux";
import store from "./store";
import { up } from "./counterSlice";
import { down } from "./counterSlice2";
//1. root
//2. AddNumberRoot , DisplayNumberRoot
//3. AddnNumber, DisplayNumber

function App(){
  console.log('App')
  return (
    <div id="container">
      <h1>Root : </h1>
      <div id="grid">
        {/* Provider 컴포넌트로 감싸진 컴포넌트들은 store에 있는 값 사용가능 */}
       <Provider store={store}>
          <Left1 ></Left1>
          <Right1></Right1>
       </Provider>
      </div>
    </div>
  )
}

function Left1(props){
  console.log('Left1')
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2 ></Left2>
    </div>
  )
}

function Left2(props){
  console.log('Left2')
  const count=useSelector(state=>state.counter2.value)
  return (
    <div>
      <h1>Left2 : {count}</h1>
      <Left3 ></Left3>
    </div>
  )
}

function Left3(props){
  console.log('Left3')
  const count=useSelector(state=>{ //값을 가져옴
    console.log(state)
    return state.counter1.value
  })
  return (
    <div>
      <h1>Left3 : {count}</h1>
    </div>
  )
}

function Right1(props){
  console.log('Right1')
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}

function Right2(props){
  console.log('Right2')

  const dispatch=useDispatch() //action 가져옴
  return (
    <div>
      <h1>Right2</h1>
      <input type="button" value="-" onClick={()=>{dispatch(down(2))}}/>
      <Right3></Right3>
    </div>
  )
}

function Right3(props){
  console.log('Right3')

  const dispatch=useDispatch()
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={()=>{dispatch(up(2))}}/>
    </div>
  )
}


export default App;






// import React,{Component, useState} from "react";
// import './App.css'
// import { Provider,useSelector,useDispatch, connect } from "react-redux";
// import store from './store'
// import {up} from './counterSlice'
// // function reducer(state,action){
// //   if(action.type==='up'){
// //     return {...state,value:state.value+action.step}
// //   }
// //   return state
// // }

// // const initialState={value:0}
// // const store=createStore(reducer,initialState)

// function Counter(){
//   const dispatch=useDispatch()
//   const count=useSelector(state=>{
//     console.log(state)
//     return state.counter.value
//   })
//   return (
//     <div>
//       <button onClick={()=>{
//         // dispatch({type:'counter123/up',step:2})
//         dispatch(up(2))
//       }}>+</button> {count}
//     </div>
//   )
// }

// function App(){
//   console.log(store)
//   return (
//     <Provider store={store}>
//       <div>
//         <Counter/>
//       </div>
//     </Provider>
//   )
// }




// export default App