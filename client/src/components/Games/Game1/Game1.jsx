import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Game1.css';

const Game1 = () => {
  const navigate = useNavigate();
  const charArray = ['q', 'd', 'p', 'b'];
  const [letter, setLetter] = useState(Array(25).fill('q'));
  const [timer, setTimer] = useState(0);
  const [hits, setHits] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [misses, setMisses] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (timer > 15) {
      navigate('/game2-instruct');
    }
  }, [timer, navigate]);

  const updateValues = (index) => {
    if (letter[index] === 'b') {
      setHits((prevHits) => prevHits + 1);
    } else {
      setMisses((prevMisses) => prevMisses + 1);
    }
    setClicks((prevClicks) => prevClicks + 1);
  };

  const getRandomChar = () => {
    return Array.from({ length: 25 }, () => charArray[Math.floor(Math.random() * charArray.length)]);
  };

  const handleClick = (index) => {
    updateValues(index);
    setLetter(getRandomChar());
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Game 1</h1>
      <div className="grid1">
        {letter.map((char, index) => (
          <div key={index} className="box1" onClick={() => handleClick(index)}>
            <span>{char}</span> {/* Changed from <h1> to <span> */}
          </div>
        ))}
      </div>
      <div className="info-container">
        <p className="score1">Score: {hits}</p> {/* Changed from <h1> to <p> */}
        <p className="timer1">Time: {timer}</p> {/* Changed from <h1> to <p> */}
      </div>
    </div>
  );
};

export default Game1;
