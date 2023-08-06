

export function reducer(state,action){
    if(state===undefined){   //초기값 세팅
        return{ 
          value:0,
        }
      }
    if(action.type==='up'){
        return {...state,value:state.value+action.step}
    }
    return state
}

