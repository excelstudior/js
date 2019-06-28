import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Header from './Components/Header/header'
import Aside from './Components/Aside/aside'
import Home from './Pages/Home'
import UserList from './Pages/User/UserList'
import routes from './Routers/index'
class App extends Component {
    state = {  }
    render() { 
        return (
            <Provider store={store}>
                <Router>
                    <div>
                    <Header/>
                    <div className='main'>main</div>
                    <Aside/>
                    {
                        routes.map((route,key)=>{
                            if(route.exact){
                                return(
                                    <Route key={key}
                                           exact
                                           path={route.path} 
                                           render={props=>(
                                            <route.component {...props}/>
                                           )
                                           }/>
                                )
                            } else {
                                return(
                                    <Route key={key}
                                           path={route.path} 
                                           render={props=>(
                                            <route.component {...props}/>
                                           )
                                           }/>
                                )
                            }
                        })
                    }
                    </div>
                </Router>
            </Provider>
         )
    }
}
 
export default App;