import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"; // ✅ Corrected path

const Games = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="w-full fixed top-0 left-0">
        <Navbar />
      </div>

      <div className="flex flex-grow items-center justify-center mt-20">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Games</h2>

          <Link to="/game1-instruct">
            <button className="w-full bg-black text-white p-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300">
              CLICK HERE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
