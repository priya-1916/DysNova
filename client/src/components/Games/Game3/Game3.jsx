import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Game3 = () => {
  const navigate = useNavigate();

  const words = [
    ['r', 'e', 'g', 'a', 'l'], 
    ['r', 'i', 'v', 'a', 'l'], 
    ['c', 'h', 'o', 'm', 'p'], 
    ['s', 'p', 'a', 'c', 'e'], 
    ['s', 't', 'a', 'm', 'p']
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [scrambledWord, setScrambledWord] = useState([]);
  const [userGuess, setUserGuess] = useState([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(30);

  // Shuffle function
  const shuffleWord = (word) => {
    let shuffled = [...word].sort(() => Math.random() - 0.5);
    return shuffled;
  };

  // Start new round
  useEffect(() => {
    setScrambledWord(shuffleWord(currentWord));
  }, [currentWord]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      navigate('/game4-instruct');
    }
  }, [timer, navigate]);

  // Handle letter click
  const handleLetterClick = (letter) => {
    setUserGuess([...userGuess, letter]);

    if (userGuess.length === 4) {
      checkAnswer([...userGuess, letter]);
    }
  };

  // Check if the answer is correct
  const checkAnswer = (guess) => {
    if (JSON.stringify(guess) === JSON.stringify(currentWord)) {
      setScore(score + 1);
    }
    
    // Move to the next word
    let nextIndex = index + 1;
    if (nextIndex < words.length) {
      setIndex(nextIndex);
      setCurrentWord(words[nextIndex]);
      setUserGuess([]);
    } else {
      navigate('/game4-instruct');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 text-gray-800 p-6 relative">
      {/* Score & Timer at the Top */}
      <div className="absolute top-4 w-full flex justify-between px-10">
        <h2 className="text-2xl font-bold text-green-600">Score: {score}</h2>
        <h2 className="text-2xl font-bold text-red-500">Time: {timer}s</h2>
      </div>

      {/* Centered Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center mt-16">
        Game 3
      </h1>

      {/* Unscramble Instruction */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Unscramble the Word!
      </h2>

      {/* User's Guess */}
      <div className="flex gap-3 mb-6">
        {userGuess.map((letter, i) => (
          <div key={i} className="w-16 h-16 flex items-center justify-center bg-green-300 text-xl font-bold border rounded-lg">
            {letter}
          </div>
        ))}
      </div>

      {/* Scrambled Letters */}
      <div className="grid grid-cols-5 gap-4">
        {scrambledWord.map((letter, i) => (
          <button
            key={i}
            className="w-16 h-16 bg-yellow-400 text-xl font-bold border rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game3;
