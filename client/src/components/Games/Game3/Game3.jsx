import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/opendyslexic';
import './Game3.css'; // Import CSS file

const Game3 = () => {
  const navigate = useNavigate();

  const words = [
    ['t', 'a', 'b', 'l', 'e'],
    ['p', 'a', 'r', 't', 'y'],
    ['g', 'r', 'a', 'p', 'e'],
    ['s', 'm', 'i', 'l', 'e'],
    ['b', 'r', 'i', 'd', 'e']
  ];

  const [currentWord, setCurrentWord] = useState([]);
  const [scrambledWord, setScrambledWord] = useState([]);
  const [userGuess, setUserGuess] = useState([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [isReading, setIsReading] = useState(false);
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);

  useEffect(() => {
    setCurrentWord(words[index]);
    setScrambledWord(shuffleWord(words[index]));
  }, [index]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      navigate('/game-complete');
    }
  }, [timer, navigate]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true');
  }, []);

  const shuffleWord = (word) => {
    let shuffled = [...word].sort(() => Math.random() - 0.5);
    while (JSON.stringify(shuffled) === JSON.stringify(word)) {
      shuffled = [...word].sort(() => Math.random() - 0.5);
    }
    return shuffled;
  };

  const handleLetterClick = (letter) => {
    setUserGuess([...userGuess, letter]);
    if (userGuess.length === currentWord.length - 1) {
      checkAnswer([...userGuess, letter]);
    }
  };

  const checkAnswer = (guess) => {
    if (JSON.stringify(guess) === JSON.stringify(currentWord)) {
      setScore(score + 1);
    }
    let nextIndex = index + 1;
    if (nextIndex < words.length) {
      setIndex(nextIndex);
      setUserGuess([]);
    } else {
      navigate('/game-complete');
    }
  };

  const readAloud = () => {
    if (!isReading) {
      setIsReading(true);
      const speech = new SpeechSynthesisUtterance(scrambledWord.join(' '));
      speech.lang = 'en-US';
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

      <h1 className="title">Game 3</h1>
      <h2 className="subtitle">Rearrange the Letters to Form a Word!</h2>

      <div className="word-container">
        {userGuess.map((letter, i) => (
          <div key={i} className="letter-box">{letter}</div>
        ))}
      </div>

      <div className="letter-grid">
        {scrambledWord.map((letter, i) => (
          <button key={i} className="letter-btn" onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <div className="status-bar">
        <span className="score">Score: {score}</span>
        <span className="timer">Time: {timer}s</span>
      </div>
    </div>
  );
};

export default Game3;
