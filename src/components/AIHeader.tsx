import React from 'react';
import './AIHeader.css';

const AIHeader: React.FC = () => {
  return (
    <header className="ai-header">
      <div className="container">
        <h1>Get Your AI Haircut Recommendation</h1>
        <button className="ai-button">Upload Photo for AI Recommendation</button>
      </div>
    </header>
  );
};

export default AIHeader; 