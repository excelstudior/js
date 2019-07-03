import React, { Component} from 'react';
import {ResetCss} from './style.js'
import {Provider} from 'react-redux'
import store from './store/index'
import Header from './common/header/index';
class App extends Component {
    
    render() { 
        return ( 
            <Provider store={store}>
               <ResetCss/>
               <Header/>
               <div>Hello Jianshu</div>
           </Provider>
           
         )
    }
}
 
export default App;