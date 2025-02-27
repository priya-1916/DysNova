import React from 'react';
import { Link } from 'react-router-dom';
import Game4 from '../../../components/Games/Game4/Game4';


const Index = () => {
  return (
    <div>
      <div>GAME 4</div>
      <Link to='/game-complete'>
          <button>CLICK HERE</button>
      </Link>
      <Game4/>
    </div>
  )
}

export default Index
