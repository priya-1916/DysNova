import React from 'react';
import { Link } from 'react-router-dom';


import './index.css'
import Game2 from '../../../components/Games/Game2/Game2';

const Index = () => {
  return (
    <div>
      <div class="content2">GAME 2</div>
      <Link to='/game3-instruct' class="content22">
          <button class="content2">CLICK HERE</button>
      </Link>
      <Game2/>
    </div>
  )
}

export default Index
