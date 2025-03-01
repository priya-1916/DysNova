import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About DysNova</h1>

      <section className="about-section">
        <h2>Our Inspiration</h2>
        <p>
          Dyslexia is one of the most common learning disabilities in children, 
          yet awareness and early detection remain challenges. Within the United 
          States, about <strong>14.5 to 43.5 million</strong> individuals are affected. 
          We wanted to build a project that enhances patient and healthcare education, 
          ultimately raising awareness and aiding in dyslexia detection.
        </p>
      </section>

      <section className="about-section">
        <h2>What is DysNova?</h2>
        <p>
          Dyscovery is a web-based platform that educates users about dyslexia 
          and provides an interactive way to predict whether someone may have it. 
          Inspired by medical research, we designed <strong>four distinct word games</strong> 
          to assess key dyslexia indicators. Our Machine Learning model, using a 
          <strong>Neural Network Algorithm</strong>, predicts dyslexia with <strong>85.19% accuracy</strong>. 
          The results are processed and sent back to the user via a REST API.
        </p>
      </section>

      <section className="about-section">
      <h2>How We Built It</h2>
<p>
  Our website was developed using the <strong>MERN Stack</strong> (MongoDB, Express.js, React, and Node.js), 
  along with <strong>JavaScript, HTML, CSS</strong>. The backend is powered by <strong>Node.js</strong> 
  and <strong>Express.js</strong>, ensuring seamless API integration and performance.
</p>
<p>
  For the machine learning model, we implemented a <strong>Neural Network</strong> using <strong>TensorFlow and Keras</strong>. 
  The model was trained in <strong>VS Code</strong> and serialized using <strong>Pickle</strong> for efficient reloading and predictions.
</p>

      </section>

      <section className="about-section">
        <h2>Challenges We Faced</h2>
        <p>
          One of the biggest challenges was setting up the backend. Our goal was 
          to seamlessly process game data from the Frontend, send it to the Machine 
          Learning Model for evaluation, and return the results in real time. 
        
        </p>
      </section>

      <section className="about-section">
        <h2>Our Accomplishments</h2>
        <p>
          As our first hackathon experience, developing DysNova from concept 
          to implementation was an incredible journey. Each team member brought 
          unique skills, and we learned invaluable lessons along the way. The 
          most rewarding part was seeing users engage with our work and knowing 
          that we created something with a positive impact.
        </p>
      </section>

      <footer className="about-footer">
        <p>© 2025 DysNova Team. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
