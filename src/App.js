import { Provider, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { store } from "./store";

// const store=createStore(reducer)

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






