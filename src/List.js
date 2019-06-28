import React, { Component } from 'react';
import store from './store/index';



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
        this.SubmitNewItem=this.SubmitNewItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    SubmitNewItem(){
        const action={
            type:'SUBMIT_NEW_ITEM',
            value:this.state.inputValue
        }
        store.dispatch(action)
    }
    handleStoreChange(){
        console.log("store change")
        this.setState(store.getState(),()=>{
            console.log(store.getState())
        })
        
    }
    handleInputChange(e){
        //console.log(e.target.value)
        //create action
        const action={
            type:'CHANGE_INPUT_VALUE',
            value:e.target.value
        }
        store.dispatch(action)
    }
    render() { 
        let contents=this.state.list
        return ( 
            <div>
                <InputBox handleOnClick={this.handleInputChange}/>
                <button onClick={this.SubmitNewItem}/>
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