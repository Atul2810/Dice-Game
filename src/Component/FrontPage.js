import React from 'react'
import './FrontPage.css'
function FrontPage(props) {
  return (
    <div className='container'>
      <img src="https://us.123rf.com/450wm/seamartini/seamartini2104/seamartini210400241/167444194-gambling-game-dice-realistic-vector-set-of-casino-craps-poker-and-tabletop-board-games-isolated.jpg?ver=6" alt="" />
      <div>
      <h1>The Dice game</h1>
      <button onClick={props.onClick} className="start-btn">Start Game</button>
      </div>
    </div>
  )
}

export default FrontPage
