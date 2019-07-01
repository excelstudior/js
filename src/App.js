import React, { Component,Fragment} from 'react';
import {ResetCss} from './style.js'
class App extends Component {
    state = {  }
    render() { 
        return ( 
           <Fragment>
               <ResetCss/>
               <div>Hello Jianshu</div>
           </Fragment>
            
           
         )
    }
}
 
export default App;