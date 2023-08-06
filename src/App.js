import { Provider, createStore, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { reducer } from "./reducer";

const initialState={value:0}
const store=createStore(reducer,initialState)
function App(){
  const count=useSelector(state=>state.value)
  return (
    <Provider>
      <div>
        <Counter count={count}/>
      </div>
    </Provider>
  )
}

export default App;






