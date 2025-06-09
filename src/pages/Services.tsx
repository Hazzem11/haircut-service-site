import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      name: 'Classic Haircut',
      description: 'Traditional haircut with scissor and clipper work',
      price: '$30',
      duration: '30 min'
    },
    {
      name: 'Premium Haircut',
      description: 'Advanced styling with premium products and detailed finish',
      price: '$45',
      duration: '45 min'
    },
    {
      name: 'Beard Trim',
      description: 'Professional beard shaping and grooming',
      price: '$20',
      duration: '20 min'
    },
    {
      name: 'Hot Towel Shave',
      description: 'Classic straight razor shave with hot towel treatment',
      price: '$35',
      duration: '30 min'
    },
    {
      name: 'Hair Styling',
      description: 'Professional styling for any occasion',
      price: '$25',
      duration: '25 min'
    },
    {
      name: 'Kids Haircut',
      description: 'Specialized cuts for children under 12',
      price: '$25',
      duration: '25 min'
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.name}</h2>
            <p className="service-description">{service.description}</p>
            <div className="service-details">
              <span className="service-price">{service.price}</span>
              <span className="service-duration">{service.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 