import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'


const Index = () => {
  return (
    <div>
        <div>
          <div class="App">
          <h1>Game 1</h1>
          </div>
          <div class="App1">
            <h2> Click on the 'b' among the other letters</h2>
          </div>
        </div>
        <Link to='/game1-play'>
          <button>CLICK HERE</button>
        </Link>
    </div>
  )
}

export default Index
