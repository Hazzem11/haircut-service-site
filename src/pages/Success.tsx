import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

const Success: React.FC = () => {
  const navigate = useNavigate();

  // Mock booking data (in a real app, this would come from state management or API)
  const bookingDetails = {
    service: 'Classic Haircut',
    price: '$30',
    barber: 'John Smith',
    date: 'June 15, 2024',
    time: '2:00 PM',
    location: '123 Haircut Street, City, State'
  };

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        <p className="success-message">Your appointment has been successfully scheduled.</p>
        
        <div className="booking-details">
          <h2>Booking Details</h2>
          <div className="detail-item">
            <span className="detail-label">Service:</span>
            <span className="detail-value">{bookingDetails.service}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Price:</span>
            <span className="detail-value">{bookingDetails.price}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Barber:</span>
            <span className="detail-value">{bookingDetails.barber}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Date:</span>
            <span className="detail-value">{bookingDetails.date}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Time:</span>
            <span className="detail-value">{bookingDetails.time}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{bookingDetails.location}</span>
          </div>
        </div>

        <button 
          className="done-button"
          onClick={() => navigate('/')}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Success; 