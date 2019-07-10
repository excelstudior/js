import {CREATE_SUBREDDIT_LIST} from './action'
const defaultState={
    // focused:false
    subRedditList:[]
};

const header=(state=defaultState,action)=>{
    switch(action.type){
       
        case CREATE_SUBREDDIT_LIST:{
            if(action.list.length==0) { 
                return {state,subRedditList:[]}
            } else {
                return Object.assign({},state,{
                    subRedditList:action.list.map((item)=>{
                        let redditItem={
                            title:item.data.title,
                            mark:false,
                            url:item.data.url
                        }
                        return redditItem
                    })
                 })
            }   
        }
        default:
        return state
    }
}
export default header