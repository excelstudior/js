import React, { Component} from 'react';
import {ResetCss,HyperLink} from './style.js'
import {Provider} from 'react-redux'
import store from './store/index'
import Header from './common/header/index';
import Nav from './common/nav/nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import routers from './Router/index'
import {toggleElement} from './util';
import '../public/css/common.css'
class App extends Component {
    
    componentDidMount(){
        window.addEventListener('click',toggleElement)
    }

    render() { 
       
        return ( 
        <Provider store={store}>
            <Router>
            <div >
               <ResetCss/>
               <HyperLink/>
               <Header/>
               <div>Hello Jianshu</div>
               <Nav/>
               <Switch>
                {routers.map((route,index)=>{
                    if(route.exact){
                        return(
                            <Route key={index}
                                   exact
                                   path={route.path}
                                   render={props=>(
                                       <route.component {...props}/>
                                   )}
                            />
                        )
                    } else {
                        return(
                        <Route key={index}
                               path={route.path}
                               render={props=>(
                                   <route.component {...props}/>
                               )}
                        />
                    )
                    }
                    
                })}
                </Switch>
            </div>
            </Router>
        </Provider>
           
         )
    }
}
 
export default App;