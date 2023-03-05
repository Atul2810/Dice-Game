import React, { useState } from 'react'
import FrontPage from './Component/FrontPage';
import SecondPage from './Component/SecondPage';

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
