import {SETFOCUSED} from '../common/header/action'
const defaultState={
    focused:false
};

const reducer=(state=defaultState,action)=>{
    console.log(state)
     console.log(action)
    switch(action.type){
       
        case SETFOCUSED:
            return Object.assign({},state,{focused:action.value})
        default:
        return state
    }
}
export default reducer