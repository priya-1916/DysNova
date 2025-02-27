import React from 'react';
import { Link } from 'react-router-dom';
import Game3 from '../../../components/Games/Game3/Game3';

import './index.css'

const Index = () => {
  return (
    <div>
      <div className="content3"><h1>GAME 3</h1></div>
      {/* <Link to='/game4-instruct'>
          <Button>CLICK HERE</Button>
      </Link> */}
      <Game3/>
    </div>
  )
}

export default Index
