import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class App extends Component {
    state = {  }
    render() { 
        return (
            <Rounter>
                <Provider store={store}>
                    <div>
                    Hello App
                    </div>
                </Provider>
            </Rounter> 
         )
    }
}
 
export default App;