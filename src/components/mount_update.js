
import React,{Component} from "react";

class Mountupdate extends Component{
    constructor(){
    super()
        this.state = {
            counter : 0
        };
        console.log("constructor");
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1,
    
        });
    }
    decrement(){
        this.setState({
            counter : this.state.counter - 1,
        });
    }

    componentWillMount(){
        console.log("Component will mount")
    }
    componentDidMount(){
        console.log("component did mount")
    }

    render(){
        return(
            <div>
            <h2>value of the count:{this.state.counter}</h2>
            <button classNmae="btn btn-primary" type="button" onClick={()=>{this.increment()}}>INCREMENT</button>
            <button classNmae="btn btn-secondary" type="button" onClick={()=>{this.decrement()}}>DECREMENT</button>
            </div>
        )
    }

    
}

export default Mountupdate;