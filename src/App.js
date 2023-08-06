import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import Counter from "./components/Counter";
import { reducer } from "./reducer";

const initialState={value:0}
const store=createStore(reducer,initialState)
function App(){
  
  return (
    <Provider store={store}>
      <div>
        <Counter/>
      </div>
    </Provider>
  )
}

export default App;






