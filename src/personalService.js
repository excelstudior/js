import React,{Component,Fragment} from 'react';
class PersonalService extends Component{
    constructor(props){
        super(props)
        this.state={
            newService:'',
            list:['Neck','Shoulder']
        }
        this.onNewServiceChange=this.onNewServiceChange.bind(this);
        this.AddService=this.AddService.bind(this);
        this.removeService=this.removeService.bind(this);
    }
    onNewServiceChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            newService:e.target.value
        })
    }
    AddService=()=>{
        if(this.state.newService!=''){
            this.setState({
            list:[...this.state.list,this.state.newService]
            })
        }
    }
    removeService=(e)=>{
        console.log()
        this.setState({
            list:[this.state.list.filter((item)=>item!=e.target.innerHTML)]
        })
        
    }
    render(){
        return(
            <Fragment>
                <div><input value={this.state.newService}
                            onChange={this.onNewServiceChange}/>
                    <button onClick={this.AddService}>Add Service</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (<li key={index+item}
                                       onClick={this.removeService}>{item}</li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default PersonalService;