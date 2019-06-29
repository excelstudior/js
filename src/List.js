import React, { Component } from 'react';
import store from './store/index';
import {CHANGE_INPUT_VALUE,
    SUBMIT_NEW_ITEM,
    DELETE_ITEM
} from './store/constants'


const Item=({content})=>{
    return(
        <li>
            This is {content}
        </li>
    )
}
const InputBox=({handleOnClick})=>{
    return(
        <input type='text' onChange={handleOnClick}/>
    )
}

class List extends Component {
    constructor(props){
        super(props);
        console.log(store.getState())
        this.state=store.getState() 
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.submitNewItem=this.submitNewItem.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.findItem=this.findItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    submitNewItem(){
        const action={
            type:SUBMIT_NEW_ITEM,
            value:this.state.inputValue
        }
        store.dispatch(action)
    }
    deleteItem(){
        let doesItemExists=this.findItem();
        if (doesItemExists){
            const action={
                type:DELETE_ITEM,
                value:this.state.inputValue
            }
            store.dispatch(action)
        } else{
            alert("Item doesn't exists!")
        }
    }
    findItem(){
        return this.state.list.indexOf(this.state.inputValue)>-1
    }
    handleStoreChange(){
        console.log("store change")
        this.setState(store.getState(),()=>{
            console.log(store.getState())
        })
        
    }

    handleInputChange(e){
        //create action
        const action={
            type:CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        store.dispatch(action)
    }
    render() { 
        let contents=this.state.list
        return ( 
            <div>
                <InputBox handleOnClick={this.handleInputChange}/>
                <button onClick={this.submitNewItem} style={{margin:'10px'}}>Add</button>
                <button onClick={this.deleteItem} style={{margin:'10px'}}>Delete</button>
                <ul>
                   {contents.map((item,index)=>{
                       return <Item key={item+index} content={item}/>
                   })}
                    
                </ul>
            </div>
         )
    }
}
 
export default List;