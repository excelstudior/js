import {CHANGE_INPUT_VALUE,
    SUBMIT_NEW_ITEM,
    DELETE_ITEMS,
    DELETE_SELECTED_ITEM,
    MARK_ITEM,
    INIT_SUBREDDIT_LIST,
} from './constants'
const defaultState={
    inputValue:'',
    list:['apple','orange','banana','pear'],
    subredditList:[]
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
        case INIT_SUBREDDIT_LIST:{
            return Object.assign({},state,{
                subredditList:action.list.map((item)=>{
                    console.log(item.data.title)
                    let redditItem={
                        title:item.data.title,
                        mark:false
                    }
                    return redditItem
                })
             })
        }
        case MARK_ITEM:{
            return Object.assign({},state,{
                subredditList:state.subredditList.map((item,index)=>{
                    if (index!=action.index){
                        return item
                    } else {
                        return Object.assign({},item,{mark:!item.mark})
                    }
                })
             })
        }
        default:
        return state;
    }
    
}
export default reducer