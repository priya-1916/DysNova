import React from 'react';
import { Link } from 'react-router-dom';


import './index.css'
import Game2 from '../../../components/Games/Game2/Game2';

const Index = () => {
  return (
    <div>
      <div class="content2"></div>
      <Link to='/game3-instruct' class="content22">
          
      </Link>
      <Game2/>
    </div>
  )
}

export default Index
