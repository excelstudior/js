import React, { Component } from 'react';
import {Provider} from 'react-redux'
import TodoList from './Apps/TodoList/Todo'
import store from './store'



class AppRedux extends Component {
    state = {  }
    render() { 
        return ( 
                <Provider store={store}>
                    <TodoList/>
                </Provider>
                    
       )
    }
}
 

export default AppRedux