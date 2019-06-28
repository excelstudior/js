import React, { Component } from 'react';
import store from './store/index';



const Item=({content})=>{
    return(
        <li>
            This is {content}
        </li>
    )
}

class List extends Component {
    constructor(props){
        super(props);
        console.log(store.getState())
        this.state=store.getState()  
    }
    render() { 
        let contents=this.state.list
        return ( 
            <div>
                <ul>
                   {contents.map((item,index)=>{
                       return <Item content={item}/>
                   })}
                    
                </ul>
            </div>
         )
    }
}
 
export default List;