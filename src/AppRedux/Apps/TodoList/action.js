import {CHANGE_PENDINGTODO_VALUE,ADD_ITEM,REMOVE_TODO} from '../TodoList/constants'
export const changePendingTodoValue=(value)=>({
    type:CHANGE_PENDINGTODO_VALUE,
    value
})
export const addTodo=()=>({
    type:ADD_ITEM
})
export const removeTodo=(index)=>({
    type:REMOVE_TODO,
    index
})
export const test='test'