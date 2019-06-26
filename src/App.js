import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class App extends Component {
    state = {  }
    render() { 
        return (
            <Provider store={store}>
                <Router>
                    <div>
                    Hello App
                    </div>
                </Router>
            </Provider>
         )
    }
}
 
export default App;