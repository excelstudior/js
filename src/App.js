import React, { Component} from 'react';
import {ResetCss,HyperLink} from './style.js'
import {Provider} from 'react-redux'
import store from './store/index'
import Header from './common/header/index';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import routers from './Router/index'
import {toggleElement} from './util';
class App extends Component {
    
    render() { 
        return ( 
        <Provider store={store}>
            <Router>
            <div onClick={(e)=>toggleElement(e)}>
               <ResetCss/>
               <HyperLink/>
               <Header/>
               <div>Hello Jianshu</div>
                {routers.map((route,index)=>{
                    return(
                        <Route key={index}
                               path={route.path}
                               render={props=>(
                                   <route.component {...props}/>
                               )}
                        />
                    )
                })}
            </div>
            </Router>
        </Provider>
           
         )
    }
}
 
export default App;