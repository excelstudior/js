import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changePendingTodoValue} from './action'

class TodoList extends Component {
    constructor(props){
        super(props)
        //this.handleValueChange=this.handleValueChange.bind(this)
    }

    // handleValueChange(e){
    //     console.log(e.target.value)
    //     //this.props.
    // }
    render() { 
        return (  
            <div>
                <input value={this.props.pendingTodo} onChange={this.props.changePendingTodo}/><button>Add</button>
            </div>
        )
    }
}
//state as parameter and return and object
const mapStateToProps=(state)=>{
    return{
        pendingTodo:state.pendingTodo
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changePendingTodo(e){
            const action=changePendingTodoValue(e.target.value)
           console.log(e.target.value)
            dispatch(action)
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);