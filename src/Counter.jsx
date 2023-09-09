import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    const handeAdd =() =>{
        const newCount = count+1;
        setCount(newCount);
    }
    const handleReduce =()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    return (
        <div>
            <h3>Counter:{count} </h3>
            <button onClick={handeAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}