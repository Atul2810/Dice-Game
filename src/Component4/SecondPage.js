import React, { useEffect, useState } from "react";
import "./SecondPage.css";
function SecondPage() {
  const arr = [1, 2, 3, 4, 5, 6];
  const [selectedNum,setSelectedNum]=useState(null);
  const [randomNum,setRandomNum]=useState(1);
  const [isNumSelect,setIsNumSelect]=useState(0);
  const [score,setScore]=useState(0);
  const [num,setnum]=useState(1);
    useEffect(()=>{
         if(num===1){
          return;
         }
          if(!(isNumSelect===-1)){
          let currscore=(selectedNum===randomNum) ? selectedNum : -2;
          setScore(score+currscore);
          }
    },[randomNum])

  
  return (
    <div className="box">
      {!(isNumSelect===-1) ? <h1>Select Number</h1> : <h3 style={{color:"red",fontSize:"45px",}}>Please Select a Number</h3>}
      <div className="dice-num">
        {arr.map((val,index) => {
          return <button key={index} onClick={()=>{setSelectedNum(val); setIsNumSelect(1)}} style={{backgroundColor: `${selectedNum===val ? 'green' : 'black'}`}}  className="num-btn">{val}</button>;
        })}
      </div>
      <div className="dice-img" onClick={()=>{ setIsNumSelect((isNumSelect-1)< 0 ? -1 : 0);  setnum(2) ;
       (isNumSelect===1) ?  setRandomNum(Math.ceil(Math.random()*6)): <h1> </h1>}} >
        <img src={`dice${randomNum}.png`} alt="" />
        <p>Click on dice to roll</p>
      </div>

      <div className="score">
        <p>{score}</p>
        <h2>Total Score</h2>
        <button onClick={()=>{setSelectedNum(null)
         setRandomNum(1) 
         setIsNumSelect(0)
         setScore(0)
        setnum(1);}}>Reset Score</button>
      </div>
    </div>
  );
}

export default SecondPage;
