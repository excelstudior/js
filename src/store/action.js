
import {CHANGE_INPUT_VALUE,
    SUBMIT_NEW_ITEM,
    DELETE_ITEMS,
    DELETE_SELECTED_ITEM
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