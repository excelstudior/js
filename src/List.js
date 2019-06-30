import React, { Component } from 'react';
import store from './store/index';
import { getInputValue,
    submitNewItem,
    deleteItems,
    deleteSeletedItem,
    getSubreddit,
    markItem
    // initList
} from './store/action'
import './css/index.css'

//only one store
//keep state immuted using spread operator, Object assign to copy state, reduce must be pure function
//createStore
// store.dispatch
// store.getState
// store.subscribe
//arrow function to pass parameter to prop function
//function component faster than class component, 
//doesn't need to execute life-cycle method
const Item=({content,removeItem,index,markItem})=>{
    return(
        <li onClick={removeItem} value={index} className={markItem?'read':'unread'}>
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
        this.loadSubredditTitles=this.loadSubredditTitles.bind(this)
        this.findItem=this.findItem.bind(this)
        this.markItem=this.markItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    loadSubredditTitles(){
        const action=getSubreddit('nba')
        store.dispatch(action)
        
    }
    componentDidMount(){
        const action=getSubreddit('csharp')
        store.dispatch(action)
        
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
            const action=deleteSeletedItem(e.target.value)
            store.dispatch(action)
    }
    findItem(){
        return this.state.list.indexOf(this.state.inputValue)>-1
    }
    markItem(e){
        const action=markItem(e.target.value)
        store.dispatch(action)
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
        let subredditTitles=this.state.subredditList
        console.log(subredditTitles)
        return ( 
            <div>
                <InputBox handleOnClick={this.handleInputChange}/>
                <button onClick={this.submitNewItem} style={{margin:'10px'}}>Add</button>
                <button onClick={this.deleteItem} style={{margin:'10px'}}>Delete</button>
                <button onClick={this.loadSubredditTitles} style={{margin:'10px'}}>Load</button>
                <ul>
                   {contents.map((item,index)=>{
                       return <Item key={item+index} 
                                    index={index} 
                                    content={item} 
                                    removeItem={this.deleteCurrentItem}/>
                   })}
                    
                </ul>
                <ul>
                   {subredditTitles.map((item,index)=>{
                       return <Item key={item.title+index}
                                    index={index}
                                    content={item.title}
                                    removeItem={this.markItem}
                                    markItem={item.mark}
                                    />
                   })}
                </ul>
            </div>
         )
    }
}
 
export default List;