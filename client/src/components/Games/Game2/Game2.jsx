import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/opendyslexic';
import './Game2.css';

const Game2 = () => {
  const navigate = useNavigate();
  const [letter, setLetter] = useState(
    Array(25).fill('E').map((_, i) => (i === 8 ? 'F' : 'E'))
  );
  const [timer, setTimer] = useState(15);
  const [hits, setHits] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      navigate('/game3-instruct');
    }
  }, [timer, navigate]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true');
  }, []);

  const updateValues = (index) => {
    if (letter[index] === 'F') {
      setHits((prevHits) => prevHits + 1);
    }
    setLetter(getRandomChar());
  };

  const getRandomChar = () => {
    let arr = new Array(25).fill('E');
    arr[Math.floor(Math.random() * 25)] = 'F';
    return arr;
  };

  const readAloud = () => {
    if (!isReading) {
      setIsReading(true);
      const speech = new SpeechSynthesisUtterance(letter.join(' '));
      speech.lang = 'en-US';
      speech.rate = 0.8;
      speech.onend = () => setIsReading(false);
      window.speechSynthesis.speak(speech);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !(localStorage.getItem('darkMode') === 'true');
    localStorage.setItem('darkMode', newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  const toggleFont = () => {
    setIsDyslexicFont(!isDyslexicFont);
  };

  return (
    <div className={`${isDyslexicFont ? 'dyslexic-font' : ''}`}>
      <div className="header">
        <button onClick={toggleDarkMode} className="toggle-btn">
          {document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <button onClick={readAloud} className="toggle-btn">🔊 Read Aloud</button>
        <button onClick={toggleFont} className="toggle-btn">
          {isDyslexicFont ? '🔠 Normal Font' : '🧠 Dyslexic Font'}
        </button>
      </div>

      <h1 className="game-title">Game 2</h1>

      {/* Score and Timer Fixed at the Top */}
      <div className="fixed-info">
        <p className="score1">Score: {hits}</p>
        <p className="timer1">Time: {timer}s</p>
      </div>

      <div className="grid1">
        {letter.map((char, index) => (
          <div key={index} className="box1" onClick={() => updateValues(index)}>
            <span>{char}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game2;
