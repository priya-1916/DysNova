import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar"

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userEmail", email);
      setIsAuthenticated(true);
      alert("Login Successful!");
      navigate("/games");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* ✅ Full-Width Navbar (Only One) */}
      <div className="w-full fixed top-0 left-0">
        <Navbar />
      </div>

      {/* ✅ Centered Login Form */}
      <div className="flex flex-grow items-center justify-center mt-20">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          
          <form onSubmit={handleLogin} className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-gray-600">
            Not a user?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
