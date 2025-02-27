import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Index = () => {
  return (
    <div>
      <div>
        <div className="App">
          <h1 className="content4">Game 4</h1>
        </div>
        <div className="App1">
          <h2 className="content4">Re-order the letters to write a correct word</h2>
        </div>
      </div>
      <Link to="/game4-play" className="content4">
        <button className="play-button">CLICK HERE</button>
      </Link>
    </div>
  );
};

export default Index;
