import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changePendingTodoValue,addTodo,removeTodo} from './action'
//function component improve performance, and it won't run life cycle method
const Todo=({index,todo,removeTodo})=>{
    return <li key={index+todo} value={index} onClick={removeTodo}>{todo}</li>
}
const TodoList=(props)=>{
    const {todos,pendingTodo,removeTodo,changePendingTodo,addTodo}=props;
        return (  
            <div>
                <input value={pendingTodo} placeholder='new todo'
                       onChange={changePendingTodo}/>
                <button onClick={addTodo}>Add</button>
                {todos.length>0?<ul>
                    {todos.map((todo,index)=>{
                           return <Todo index={index} 
                                        todo={todo}
                                        removeTodo={removeTodo}/>
                    })}
                    
                </ul>:<br/>}
            </div>
        )
}
// class TodoList extends Component {
//     constructor(props){
//         super(props)
//     }

//     render() { 
//         console.log(this.state)
//         const {todos,pendingTodo,removeTodo,changePendingTodo,addTodo}=this.props;
//         return (  
//             <div>
//                 <input value={pendingTodo} placeholder='new todo'
//                        onChange={changePendingTodo}/>
//                 <button onClick={addTodo}>Add</button>
//                 {todos.length>0?<ul>
//                     {todos.map((todo,index)=>{
//                            return <Todo index={index} 
//                                         todo={todo}
//                                         removeTodo={removeTodo}/>
//                     })}
                    
//                 </ul>:<br/>}
//             </div>
//         )
//     }
// }
//state as parameter and return and object
const mapStateToProps=(state)=>{
    return{
        pendingTodo:state.pendingTodo,
        todos:state.todos
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changePendingTodo(e){
            // const action=changePendingTodoValue(e.target.value)
            // dispatch(action)
            var value=e.target.value
            dispatch(changePendingTodoValue(value))
        },
        addTodo(){
            dispatch(addTodo())
        },
        removeTodo(e){
            var index=e.target.value
            console.log(index)
            dispatch(removeTodo(index))
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);