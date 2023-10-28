import { Component } from "react";

class DisplayingClass extends Component{
    constructor(){
        super()
            this.state = {
                count : 0
            }
    }

    stateCounter(){
        this.setState({
            count : this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h1>DISPLAYING DATA FROM A CLASS COMPONENT..</h1>
                <h1>count : {this.state.count}</h1>
                <button type="button" onClick={()=>{this.stateCounter()}}>INCREMENT</button>
            </div>
        )
    }
}

export default DisplayingClass;