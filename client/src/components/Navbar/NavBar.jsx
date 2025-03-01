// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userToken");
//     setIsAuthenticated(false);
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/" className="logo">DysNova.</Link>
//       </div>
//       <div className="navbar-center">
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/games">Free Testing</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//         </ul>
//       </div>
//       <div className="navbar-right">
//         {!isAuthenticated ? (
//           <Link to="/login" className="login">Login</Link>
//         ) : (
//           <button className="logout" onClick={handleLogout}>Logout</button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Show Navbar only on Home and About pages
  const showNavbar = location.pathname === "/" || location.pathname === "/about";

  if (!showNavbar) return null;

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">DysNova.</Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        {!isAuthenticated ? (
          <Link to="/login" className="login">Login</Link>
        ) : (
          <button className="logout" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
