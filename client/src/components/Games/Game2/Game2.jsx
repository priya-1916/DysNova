import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Game2.css';

const Game2 = () => {
  const navigate = useNavigate();
  const [letter, setLetter] = useState(
    Array(25).fill('E').map((_, i) => (i === 8 ? 'F' : 'E'))
  );
  const [timer, setTimer] = useState(0);
  const [hits, setHits] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [misses, setMisses] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timer > 15) {
      navigate('/game3-instruct');
    }
  }, [timer, navigate]);

  const updateValues = (index) => {
    if (letter[index] === 'F') {
      setHits((prevHits) => prevHits + 1);
    } else {
      setMisses((prevMisses) => prevMisses + 1);
    }
    setClicks((prevClicks) => prevClicks + 1);
  };

  const getRandomChar = () => {
    let arr = new Array(25).fill('E');
    arr[Math.floor(Math.random() * 25)] = 'F';
    return arr;
  };

  const handleClick = (index) => {
    updateValues(index);
    setLetter(getRandomChar());
  };

  return (
    <div className="game-container">
      {/* Centered heading */}
      <h1 className="game-title">GAME 2</h1>

      {/* Grid with letters */}
      <div className="grid2">
        {letter.map((char, index) => (
          <div key={index} className="box2" onClick={() => handleClick(index)}>
            <h1>{char}</h1>
          </div>
        ))}
      </div>

      {/* Score and Timer */}
      <div className="info-container">
        <h2 className="score2">Score: {hits}</h2>
        <h2 className="timer2">Time: {timer}</h2>
      </div>
    </div>
  );
};

export default Game2;
