import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Index = () => {
  return (
    <div className="game-container">
      <h1 className="game-title">Game 3</h1>
      <div className="App1">
        <h2 className="game-subtitle">Unscramble the five-letter word</h2>
      </div>
      <Link to="/game3-play">
        <button className="play-button">CLICK HERE</button>
      </Link>
    </div>
  );
};

export default Index;
