import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css';
const ComA=()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [move,setMoves]=useState();

    useEffect(()=>{
     async function getData(){
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res.data.name);
        setName(res.data.name)
        setMoves(res.data.moves.length)
        
     }
     getData();
    // getData();
    });
    
    return(
        <>
        <div>
           <h1>You Chose value <span style={{color:'rgb(41, 242, 71)',textTransform:'capitalize'}}> {num} </span></h1>
           <h1>My name is <span style={{color:'rgb(41, 242, 71)',textTransform:'capitalize'}}> {name}</span></h1>
           <h1>I have <span style={{color:'rgb(41, 242, 71)',textTransform:'capitalize'}}> {move} moves</span></h1>
           
           <select  style={{fontSize:'30px',backgroundColor:"pink",borderRadius:'5px',borderWidth:"2px"}}value={num} onChange={(event)=>{
            setNum(event.target.value);
            setName(event.target.name);
            setMoves(event.target.move);
           }}>
            <option value="1"> 1 </option>
            <option value="25"> 25 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
           </select>
        </div> 
        </>
    )
}
export default ComA;