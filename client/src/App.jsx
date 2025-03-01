import './App.css'
import Home from './Pages/Home/HomePage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Games from './Pages/Games/Games';
import Signup from './components/SignUp/SignUp';

import AboutUs from './Pages/Home/AboutUs .jsx';

import Login from './components/Login/Login';
import { useEffect, useState } from 'react';

import Game1_Instruct from "./Pages/Games/Game1-Instruct/Index.jsx";
import Game1_Play from './Pages/Games/Game1-Play/Index.jsx';
import Game2_Instruct from './Pages/Games/Game2-Instruct/Index.jsx';
import Game2_Play from './Pages/Games/Game2-Play/Index.jsx';
import Game3_Instruct from './Pages/Games/Game3-Instruct/Index.jsx';
import Game3_Play from './Pages/Games/Game3-Play/Index.jsx';
// import Game4_Instruct from './Pages/Games/Game4-Instruct/Index.jsx';
// import Game4_Play from './Pages/Games/Game4-Play/Index.jsx';
import Game_Complete from './Pages/Games/Game-complete/Complete.jsx';

import Navbar from './components/Navbar/Navbar.jsx';


function App() {  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setIsAuthenticated(!!userToken);
  }, []);
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
      <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/games" element={isAuthenticated ? <Games /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game1-instruct" element={<Game1_Instruct />} />
        <Route path="/game1-play" element={<Game1_Play />} />
        <Route path="/game2-instruct" element={<Game2_Instruct />} />
        <Route path="/game2-play" element={<Game2_Play />} />
        <Route path="/game3-instruct" element={<Game3_Instruct />} />
        <Route path="/game3-play" element={<Game3_Play />} />
        {/* <Route path="/game4-instruct" element={<Game4_Instruct />} />
        <Route path="/game4-play" element={<Game4_Play />} /> */}
        <Route path="/game-complete" element={<Game_Complete />} />
      </Routes>
    </Router>
  );
}

export default App;
