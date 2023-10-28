import react from "react";
import NestedFunctionalComponents from "./functional_components2";

function DisplayingData(){
    return(
        <div>
            <h1>displaying the data</h1>
            <NestedFunctionalComponents user="name"></NestedFunctionalComponents>
        </div>
    )
}

export default DisplayingData;