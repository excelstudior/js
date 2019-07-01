import {
    CHANGE_PENDINGTODO_VALUE,
    ADD_ITEM,
    REMOVE_TODO
}from './Apps/TodoList/constants'
const defaultState={
    pendingTodo:'',
    todos:[]
}

const reducer=(state=defaultState,action)=>{
    console.log(action,state)
    switch(action.type){
        case CHANGE_PENDINGTODO_VALUE: 
        return Object.assign({},state,{pendingTodo:action.value})
        case ADD_ITEM:
        return Object.assign({},state,{todos:[...state.todos,state.pendingTodo]})
        case REMOVE_TODO:
            return Object.assign({},state,{todos:state.todos.filter((todo,index)=>{
                return index!=action.index
            })})
        default:
            return state
    }
    
}
export default reducer