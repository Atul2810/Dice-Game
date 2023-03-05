import React, { useState } from 'react'
import FrontPage from './Component4/FrontPage';
import SecondPage from './Component4/SecondPage';

function App() {
  const [gameStarted,setGameStarted]=useState(false);
  function handleOnClick(){
    setGameStarted(true);
  }
  return (
    <div className='App'>
    {(gameStarted) ? (<SecondPage/>) :(<FrontPage onClick={handleOnClick}/>)}
    </div>
  )
}

export default App
