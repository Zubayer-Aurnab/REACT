import { useState } from "react"

export default function Team(){

    const [team,setTeam] = useState(11);
    const changeTeam = () =>{
        const newTeam = team + 1
        setTeam(newTeam)
    }
    const reduceTeam = () =>{
        const changedTeam = team - 1;
        setTeam(changedTeam);
    }


    const teamStyle = {
        border:'2px solid tomato',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'

    }
    return(
        <div style={teamStyle}>
            <h3>player : {team} </h3>
            <button onClick={changeTeam}>Chnage</button>
            <button onClick={reduceTeam}>reduce</button>
        </div>
    )
}