import React, { Component } from 'react';
import store from './store/index';
import { getInputValue,
    submitNewItem,
    deleteItems,
    deleteSeletedItem
} from './store/action'

//only one store
//keep state immuted using spread operator, Object assign to copy state

const Item=({content,removeItem,index})=>{
    return(
        <li onClick={removeItem} value={index}>
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
        //this.deleteCurrentItem=this.deleteCurrentItem.bind(this)
        this.findItem=this.findItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    submitNewItem(){
        const action=submitNewItem(this.state.inputValue)
        store.dispatch(action)
    }
    deleteItem(){
        let doesItemExists=this.findItem();
        if (doesItemExists){
            const action=deleteItems(this.state.inputValue)
            store.dispatch(action)
        } else{
            alert("Item doesn't exists!")
        }
    }
    deleteCurrentItem(e){
        console.log(e)
            const action=deleteSeletedItem(e.target.value)
            store.dispatch(action)
      
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
        const action=getInputValue(e.target.value)
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
                       return <Item key={item+index} 
                                    index={index} 
                                    content={item} 
                                    removeItem={this.deleteCurrentItem}/>
                   })}
                    
                </ul>
            </div>
         )
    }
}
 
export default List;