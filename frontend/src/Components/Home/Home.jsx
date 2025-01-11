import React from 'react';
import './Home.css'


function Home() {
  return (
    <section id="home">
      <div className="home-content">
        <img src="logo2.png" alt="Cafe Delight Logo" className="home-logo" />
        <h2 className="home-content">
            {Array.from("Welcome to Cafe Delight").map((letter, index) => (
              <span key={index}>{letter === ' ' ? '\u00A0' : letter}</span>
            ))}
        </h2>
        <p>Enjoy the best coffee and snacks in town!</p>
      </div>
    </section>

  );
}

export default Home; 