export function reducer(currentState,action){
    if(currentState===undefined){   //초기값 세팅
      return{ 
        number:1,
        text:''
      }
    }
    const newState={...currentState}
    switch(action.type){
        case 'PLUS':
            console.log(action)
            newState.number++
        break

        case 'SUBMIT':
            console.log(action)
            newState.text=action.value
        break

    }
    return newState
  }//tofhdnsdj