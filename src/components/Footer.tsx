import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Haircut Studio. All rights reserved.</p>
        {/* Add more footer content like links if needed */}
      </div>
    </footer>
  );
};

export default Footer; 