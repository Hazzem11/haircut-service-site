import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Our Haircut Studio</h1>
        <p>Experience the perfect blend of style and expertise</p>
      </section>
      
      <div className="book-now-container">
        <Link to="/booking" className="book-now-button">Book Now</Link>
      </div>
      
      <section className="gallery-section">
        <h2>Our Work</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="src/assets/haircut1.png" alt="Haircut style 1" />
          </div>
          <div className="gallery-item">
            <img src="src/assets/haircut2.png" alt="Haircut style 2" />
          </div>
          <div className="gallery-item">
            <img src="src/assets/haircut3.png" alt="Haircut style 3" />
          </div>
          <div className="gallery-item">
            <img src="src/assets/haircut4.png" alt="Haircut style 4" />
          </div>
          <div className="gallery-item">
            <img src="src/assets/haircut5.png" alt="Haircut style 5" />
          </div>
          <div className="gallery-item">
            <img src="src/assets/haircut6.png" alt="Haircut style 6" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 