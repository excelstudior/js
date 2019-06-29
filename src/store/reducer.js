const defaultState={
    inputValue:'',
    list:['apple','orange','banana','pear']
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'CHANGE_INPUT_VALUE':{
            state.inputValue=action.value
            return state
        }
        case 'SUBMIT_NEW_ITEM':{
            state.list=[...state.list,state.inputValue]
            return state
        }
        case 'DELETE_ITEM':{
            state.list=state.list.filter((item,index)=>{
                if(item!=action.value){
                    return item
                }
            })
            return state
        }
        default:
        return state;
    }
    
}
export default reducer