import React from 'react';
import ReactDOM from 'react-dom';
import Rose from '../public/img/rose.jpg';
import PersonalService from './personalService';
import '../public/css/index.css';
class App extends React.Component{
    state = {
        reset:'yes'
    }
    onClick=()=>{
        this.setState({
            reset:this.state.reset==='yes'?'no':'yes'
        })
    }
    render(){
        return(
            <div>
                <img src={Rose} alt='rose' className={this.state.reset==='yes'?'flower':'flower flower-rotate'} onClick={this.onClick}/>
                <PersonalService/>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))