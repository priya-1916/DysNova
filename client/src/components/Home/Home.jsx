import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import home_img from "../../assets/home_pic.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="home-container">
        <section className="home-content">
          <h1 className="home-title">
            Breaking Barriers, <br />
            <span className="home-subtitle">Building Futures</span>
          </h1>
          <p className="home-description">
            Dyslexia affects millions worldwide, making reading and learning challenging. Our interactive platform provides engaging games, expert guidance, and free testing to help individuals overcome these barriers and unlock their full potential.
          </p>

          <button className="button-style" onClick={() => navigate("/login")}>
            Take a Free Test <i className="fa-solid fa-greater-than ml-5"></i>
          </button>

          <div className="features-container">
            <div className="feature-card">
              <i className="fa-solid fa-gamepad feature-icon"></i> Interactive Games
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-people-line feature-icon"></i> Expert Guidance
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-check feature-icon"></i> Free Testing
            </div>
          </div>
        </section>

        <aside className="home-image-container">
          <img src={home_img} alt="Dyslexia Awareness" className="home-image" />
        </aside>
      </main>
    </>
  );
};

export default Home;
