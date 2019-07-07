import {CREATE_SUBREDDIT_LIST} from './action'
const defaultState={
    // focused:false
    subRedditList=[]
};

const header=(state=defaultState,action)=>{
    console.log(state)
     console.log(action)
    switch(action.type){
       
        case CREATE_SUBREDDIT_LIST:
            return Object.assign({},state,{subRedditList:action.list})
        default:
        return state
    }
}
export default header