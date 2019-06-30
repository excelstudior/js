import {
    CHANGE_PENDINGTODO_VALUE
}from './Apps/TodoList/constants'
const defaultState={
    pendingTodo:'new',
    todos:[]
}

const reducer=(state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case CHANGE_PENDINGTODO_VALUE:
            console.log(Object.assign({},state,{pendingTodo:action.value}))
        return Object.assign({},state,{pendingTodo:action.value})
        default:
            return state
    }
    
}
export default reducer