import {CREATE_SUBREDDIT_LIST} from './action'
const defaultState={
    // focused:false
    subRedditList:[]
};

const header=(state=defaultState,action)=>{
    console.log(state)
     console.log(action)
    switch(action.type){
       
        case CREATE_SUBREDDIT_LIST:{
            return Object.assign({},state,{
                subRedditList:action.list.map((item)=>{
                    //console.log(item.data.title)
                    let redditItem={
                        title:item.data.title,
                        mark:false
                    }
                    return redditItem
                })
             })
        }
        default:
        return state
    }
}
export default header