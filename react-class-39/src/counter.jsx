import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)
    const handelCount = ()=>{
        const newCount = count+1;
        setCount(newCount);
    }
    const reduce = () =>{
        const newCount = count - 1
        setCount(newCount)
    }

    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>counter : {count} </h3>
            <button onClick={handelCount}>Add</button>
            <button onClick={reduce}>reduce</button>
        </div>
    )
}