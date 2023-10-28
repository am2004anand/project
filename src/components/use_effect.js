import react,{useEffect,useState} from "react";

function ExampleuseEffect(){
    const [count,setCount] = useState(0);





    useEffect(()=>{
        console.log('The counter value is',{count})
        return ()=>{console.log('cpmponent will unmount')}
    },[count])

    return(
        <div>
            <h1>Count : {count}</h1>
            <button type="button" onClick={()=>{setCount(count+1)}}>INCREMENT</button>
        </div>
    )
        
    
}

export default ExampleuseEffect;