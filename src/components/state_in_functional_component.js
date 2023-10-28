import react, {useState} from "react";

function CounterInFunc(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>i am a functional component..</h1>
            <h1>count:{count}</h1>
            <button onClick={()=>{setCount(count+1)}}> INCREMENT</button>
        </div>
    )
}

export default CounterInFunc;