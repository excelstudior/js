
import {CHANGE_INPUT_VALUE,
    SUBMIT_NEW_ITEM,
    DELETE_ITEMS,
    DELETE_SELECTED_ITEM,
    INIT_SUBREDDIT_LIST,
    MARK_ITEM
} from './constants'
import axios from 'axios';

export const getInputValue=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const submitNewItem=(value)=>({
    type:SUBMIT_NEW_ITEM,
    value
})
export const deleteItems=(value)=>({
    type:DELETE_ITEMS,
    value
})
export const deleteSeletedItem=(index)=>({
    type:DELETE_SELECTED_ITEM,
    index
})
export const markItem=(index)=>({
    type:MARK_ITEM,
    index
})
export const initSubredditList=(list)=>({
    type:INIT_SUBREDDIT_LIST,
    list
})
export const getSubreddit=(subreddit)=>{
    return (dispatch)=>{
        axios.get(`https://www.reddit.com/r/${subreddit}.json`)
        .then((res)=>{
            const children=res.data.data.children
            const action=initSubredditList(children)
            dispatch(action)
        })
    }
}