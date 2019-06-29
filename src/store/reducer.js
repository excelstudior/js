import {CHANGE_INPUT_VALUE,
    SUBMIT_NEW_ITEM,
    DELETE_ITEMS,
    DELETE_SELECTED_ITEM,
    INIT_LIST
} from './constants'
const defaultState={
    inputValue:'',
    list:['apple','orange','banana','pear']
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case CHANGE_INPUT_VALUE:{
            return Object.assign({},state,{
                inputValue:action.value
            })
        }
        case SUBMIT_NEW_ITEM:{
            return Object.assign({},state,{
               list:[...state.list,state.inputValue]
            })
        }
        case DELETE_ITEMS:{
            return Object.assign({},state,{
                    list:state.list.filter((item,index)=>{
                    if(item!=action.value){
                        return item
                    }
                })
             })
        }
        case DELETE_SELECTED_ITEM:{
            return Object.assign({},state,{
                    list:state.list.filter((item,index)=>{
                    if(index!=action.index){
                        return item
                    }
                })
             })
        }
        case INIT_LIST:{
            return Object.assign({},state,{
                    list:action.list
             })
        }
        default:
        return state;
    }
    
}
export default reducer