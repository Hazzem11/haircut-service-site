import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaCalendarAlt, FaInfoCircle, FaPhone, FaHome } from 'react-icons/fa';
import scissorsIcon from './assets/scissors.svg';
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import AIRecommendation from './pages/AIRecommendation';
import Services from './pages/Services';
import Success from './pages/Success';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar bg="dark" variant="dark" expand="md" className="mb-4 rounded" style={{ background: 'var(--color-bg-secondary)' }}>
          <Container>
            <Navbar.Brand as={Link} to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
              <img src={scissorsIcon} alt="Scissors icon" style={{ width: '28px', height: '28px', filter: 'invert(74%) sepia(87%) saturate(830%) hue-rotate(6deg) brightness(103%) contrast(103%)' }} />
              <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>Haircut Studio</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <Nav className="ms-auto" style={{ gap: '1.5rem', alignItems: 'center' }}>
                <Nav.Link as={Link} to="/" className="d-flex align-items-center"><FaHome className="me-1" /> Home</Nav.Link>
                <Nav.Link as={Link} to="/services" className="d-flex align-items-center"><img src={scissorsIcon} alt="Services icon" style={{ width: '1em', height: '1em', marginRight: '0.25rem', filter: 'invert(74%) sepia(87%) saturate(830%) hue-rotate(6deg) brightness(103%) contrast(103%)' }} /> Services</Nav.Link>
                <Nav.Link as={Link} to="/booking" className="d-flex align-items-center"><FaCalendarAlt className="me-1" /> Booking</Nav.Link>
                <Nav.Link as={Link} to="/ai-recommendation" className="d-flex align-items-center ai-button">AI Recommendation</Nav.Link>
                <Nav.Link as={Link} to="/about" className="d-flex align-items-center">About <FaInfoCircle className="ms-1" /></Nav.Link>
                <Nav.Link as={Link} to="/contact" className="d-flex align-items-center">Contact <FaPhone className="ms-1" /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-recommendation" element={<AIRecommendation />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
