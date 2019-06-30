import React from 'react';
import ReactDOM from 'react-dom';
//import Rose from './img/rose.jpg';
//import PersonalService from './personalService';
import './css/index.css';
//import List from './List'
import AppRedux from './AppRedux/AppRedux'
// class App extends React.Component{
//     state = {
//         reset:'yes'
//     }
//     onClick=()=>{
//         this.setState({
//             reset:this.state.reset==='yes'?'no':'yes'
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <img src={Rose} alt='rose' className={this.state.reset==='yes'?'flower':'flower flower-rotate'} onClick={this.onClick}/>
//                 <PersonalService/>
//                 <List/>
//             </div>
//         )
//     }
// }
//ReactDOM.render(<App/>,document.getElementById('root'))
ReactDOM.render(<AppRedux/>,document.getElementById('root'))