import { Provider, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { store } from "./store";
import InputField from "./components/InputField";
import { useEffect } from "react";
import AsyncCounter from "./components/AsyncCounter";

// const store=createStore(reducer)

function App(){
  const a= async ()=>{
    const res=await fetch
      ("https://jsonplaceholder.typicode.com/users/1"
    )
    const data=await res.json()
    return console.log(data)
  }
 useEffect(()=>{
  a()
 },[])
  return (
    <Provider store={store}>
      <div>
        <Counter/>
        <InputField/>
        <AsyncCounter/>
      </div>
    </Provider>
  )
}

export default App;






