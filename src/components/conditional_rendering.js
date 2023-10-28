import react, {useState} from "react";


function ConditioanlRendering(){
    const [state, setState] = usestate(true);

    if(state){
        return(
            <div>
                <h1>conditionalredundering</h1>
            </div>
            <p>welcome student</p>
        )
    }
}

