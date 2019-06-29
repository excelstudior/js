
import {CHANGE_INPUT_VALUE,
    SUBMIT_NEW_ITEM,
    DELETE_ITEMS,
    DELETE_SELECTED_ITEM,
    INIT_LIST
} from './constants'

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
export const initList=(list)=>({
    type:INIT_LIST,
    list
})