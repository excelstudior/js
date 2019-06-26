import React,{Component,Fragment} from 'react';
import ServiceItem from './serviceItem';
class PersonalService extends Component{
    constructor(props){
        super(props)
        this.state={
            newService:'',
            list:[]
        }
        this.onNewServiceChange=this.onNewServiceChange.bind(this);
        this.AddService=this.AddService.bind(this);
        this.removeService=this.removeService.bind(this);
    }

    componentDidMount=()=>{
        //send ajax request after DOM elements are mounted.
    }
    onNewServiceChange=(e)=>{
        this.setState({
            newService:e.target.value
        })
    }
    AddService=()=>{
        if(this.state.newService!=''){
            this.setState({
            list:[...this.state.list,this.state.newService]
            },()=>{
                console.log("setState is async,new item added!")
            })
        }
    }
    removeService=(e)=>{
        let filterIndex=e.target.value
        this.setState(prevState=>({
            list:prevState.list.filter((item,index)=>index!==filterIndex)
        }))
        
    }
    render(){
        const {list,newService}=this.state;
        return(
            <Fragment>
                {/*Comments goes here */}
                <div>
                    <label htmlFor='ServiceName'>Service :</label>
                    <input id='ServiceName'
                           className="input"
                           value={newService}
                           onChange={this.onNewServiceChange}/>
                    <button onClick={this.AddService}>Add</button>
                </div>
                <ServiceItem list={list} removeService={this.removeService}/>
            </Fragment>
        )
    }
}

export default PersonalService;