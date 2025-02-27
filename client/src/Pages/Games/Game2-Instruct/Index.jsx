import React from 'react'
import { Link } from 'react-router-dom';

import './index.css'

const Index = () => {
  return (
    <div>
      <div>
        <div class="App">
          <h1 class="content">Game 2</h1>
        </div>
        <div class="App1">
          <h2 class="content">Find the 'F' among the 'E'</h2>
        </div>
      </div>
      <Link to='/game2-play' class="content">
          <button>CLICK HERE</button>
      </Link>
    </div>
  )
}

export default Index
