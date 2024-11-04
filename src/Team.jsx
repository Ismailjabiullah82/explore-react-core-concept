import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

 
  const playerAdd = () => {
    const newPlayer = team + 1;
    setTeam(newPlayer);
  };
  const playerReduce = () => {
    const newPlayer = team - 1;
    setTeam(newPlayer);
  };


  return (
    <div style={{border:'2px solid yellow', margin:'15px', padding:'10px'}}>
      <h3>Players :{team} </h3>
      <button style={{margin:'10px'}} onClick={playerAdd}>Add</button>
      <button style={{margin:'10px'}} onClick={playerReduce}>Reduce</button>
    </div>
  );
}
