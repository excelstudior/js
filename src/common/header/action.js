import axios from 'axios'

export const SETFOCUSED='SETFOCUSED';
export const GET_SUBREDDIT='GET_SUBREDDIT';
export const CREATE_SUBREDDIT_LIST='CREATE_SUBREDDIT_LIST';

const createSubredditList=(list)=>({
    type:CREATE_SUBREDDIT_LIST,
    list
})

export const getSubreddit=(subReddit)=>{
    return (dispatch)=>{
        axios.get(`https://www.reddit.com/r/${subReddit}.json`)
        .then((res)=>{
            const children=res.data.data.children
            dispatch(createSubredditList(children))
        })
    }
}

export const setFocused=(value)=>({
    type:SETFOCUSED,
    value
})