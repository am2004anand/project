/*import React from "react";
//npm install npx create-react-app-g  -->it is the command to create react app
//npx create-react-app projectname  --> it is used to create the project
function DisplayingData(){
    return(
        <div>
            <h4>DISPLAYING DATA</h4>
        </div>
    )
}
export default DisplayingData;*/

//CLASS COMPONENT
import { Component } from "react";
import NestedClass from "./class_component";
class DisplayingClass extends Component{
    render(){
        return(
            <div>
                <h1>DISPLAYING DATA FROM A CLASS COMPONENT..</h1>
                <NestedClass></NestedClass>
            </div>
        )
    }
}

export default DisplayingClass;