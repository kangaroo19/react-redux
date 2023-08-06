

export function reducer(state,action){
    
    if(action.type==='up'){
        console.log(state)
        return {...state,value:state.value+action.step}
    }
    return state
}

