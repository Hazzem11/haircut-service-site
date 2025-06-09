import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking: React.FC = () => {
  const navigate = useNavigate();

  // Enhanced services data with prices
  const services = [
    { name: 'Classic Haircut', price: '$30', duration: '30 min' },
    { name: 'Premium Haircut', price: '$45', duration: '45 min' },
    { name: 'Beard Trim', price: '$20', duration: '20 min' },
    { name: 'Hot Towel Shave', price: '$35', duration: '30 min' },
    { name: 'Hair Styling', price: '$25', duration: '25 min' },
    { name: 'Kids Haircut', price: '$25', duration: '25 min' }
  ];

  const barbersAvailability = [
    { 
      name: 'John Smith', 
      role: 'Master Barber',
      availability: 'Mon-Fri: 9am-6pm',
      specialties: ['Classic Cuts', 'Beard Grooming']
    },
    { 
      name: 'Jane Doe', 
      role: 'Senior Stylist',
      availability: 'Tue-Sat: 10am-7pm',
      specialties: ['Modern Styles', 'Hair Coloring']
    },
    { 
      name: 'Mike Johnson', 
      role: 'Barber',
      availability: 'Wed-Sun: 11am-8pm',
      specialties: ['Fades', 'Kids Cuts']
    }
  ];

  // Calendar data for June
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const juneDates = [
    // First week (starting with empty cells for days before June 1)
    [null, null, null, null, null, 1, 2],
    // Rest of the weeks
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30]
  ];

  return (
    <div className="booking-container">
      <h1>Book Your Appointment</h1>
      <div className="booking-content">
        <div className="booking-section calendar-section">
          <h2>Select Date & Time</h2>
          <div className="calendar">
            <div className="calendar-header">
              <h3>June 2024</h3>
            </div>
            <div className="calendar-grid">
              {/* Week days header */}
              <div className="calendar-weekdays">
                {weekDays.map((day, index) => (
                  <div key={index} className="calendar-weekday">{day}</div>
                ))}
              </div>
              {/* Calendar dates */}
              <div className="calendar-dates">
                {juneDates.map((week, weekIndex) => (
                  <div key={weekIndex} className="calendar-week">
                    {week.map((date, dateIndex) => (
                      <div 
                        key={dateIndex} 
                        className={`calendar-date ${date ? 'available' : 'empty'}`}
                      >
                        {date}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="time-slots">
              <h3>Available Time Slots</h3>
              <div className="time-slots-grid">
                <div className="time-slot">9:00 AM</div>
                <div className="time-slot">10:00 AM</div>
                <div className="time-slot">11:00 AM</div>
                <div className="time-slot">1:00 PM</div>
                <div className="time-slot">2:00 PM</div>
                <div className="time-slot">3:00 PM</div>
                <div className="time-slot">4:00 PM</div>
                <div className="time-slot">5:00 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-section services-list">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <h3>{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-duration">{service.duration}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="booking-section availability-list">
          <h2>Our Team</h2>
          {barbersAvailability.map((barber, index) => (
            <div key={index} className="barber-card">
              <h3>{barber.name}</h3>
              <p className="barber-role">{barber.role}</p>
              <p className="barber-availability">{barber.availability}</p>
              <div className="barber-specialties">
                {barber.specialties.map((specialty, sIndex) => (
                  <span key={sIndex} className="specialty-tag">{specialty}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="booking-actions">
          <button 
            className="next-button"
            onClick={() => navigate('/success')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking; 