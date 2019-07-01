import React, { Component,Fragment} from 'react';
import {ResetCss} from './style.js'
import Header from './common/header/index';
class App extends Component {
    state = {  }
    render() { 
        return ( 
           <Fragment>
               <ResetCss/>
               <Header/>
               <div>Hello Jianshu</div>
           </Fragment>
            
           
         )
    }
}
 
export default App;