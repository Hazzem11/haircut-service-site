import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AIRecommendation.css';

const AIRecommendation = () => {
  const navigate = useNavigate();

  return (
    <div className="ai-recommendation-container">
      <h1 className="ai-title">AI Haircut Recommendation</h1>
      <div className="upload-section">
        <p>Upload your photo to get personalized haircut recommendations</p>
        <button className="upload-button">Upload Photo</button>
      </div>
      <div className="ai-actions">
        <button 
          className="next-button"
          onClick={() => navigate('/success')}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AIRecommendation; 