import React,{Component, useState} from "react";
import './App.css'
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
//1. root
//2. AddNumberRoot , DisplayNumberRoot
//3. AddnNumber, DisplayNumber


function App(){
  const [number,setNumber]=useState(1)
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1 number={number}></Left1>
        <Right1 onIncrese={()=>{
          setNumber(number+1)
        }}></Right1>
      </div>
    </div>
  )
}

function Left1(props){
  return (
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  )
}

function Left2(props){
  return (
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  )
}

function Left3(props){
  return (
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  )
}

function Right1(props){
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrese={()=>{
        props.onIncrese()
      }}></Right2>
    </div>
  )
}

function Right2(props){
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrese={()=>{
        props.onIncrese()
      }}></Right3>
    </div>
  )
}

function Right3(props){
  return (
    <div>
      <h1>Right3</h1>
      <input type="button"  value="+" onClick={props.onIncrese}/>
    </div>
  )
}


export default App;
