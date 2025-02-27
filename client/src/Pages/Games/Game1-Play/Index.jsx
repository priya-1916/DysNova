import React from 'react'
import { Link } from 'react-router-dom';

import Game1 from '../../../components/Games/Game1/Game1.jsx';
import './index.css'
const Index = () => {
  return (
    <div>
      <div class="content1"><h1>GAME 1</h1>
      {/* <Link to='/game2-instruct'>
          <Button>CLICK HERE</Button>
      </Link> */}
      <Game1/>
      </div>
    </div>
  )
}

export default Index
