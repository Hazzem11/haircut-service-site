import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Have a question? Get in touch with us!</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@haircutstudio.com</p>
        <p><strong>Address:</strong> 123 Main Street, Anytown, CA 91234</p>
      </div>
      <div className="contact-form-placeholder">
        <h2>Send us a message</h2>
        <p>info@haircutstudio.com</p>
      </div>
    </div>
  );
};

export default Contact; 