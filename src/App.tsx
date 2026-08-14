import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact.tsx';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/Privacy';
import Terms from './pages/Terms';
import Studio from './pages/Studio';
import Process from './pages/Process';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookie, setShowCookie] = useState(true);

  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      <header className="header">
        <div className="container nav">
          <Link to="/" className="flex items-center gap-2" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-color)' }}>
            <img src="/logo.png" alt="REVAT LTD Logo" style={{ height: '40px' }} />
            REVAT LTD
          </Link>
          
          <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/studio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Studio</Link>
            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/process" className="nav-link" onClick={() => setIsMenuOpen(false)}>Process</Link>
            <Link to="/portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
          </nav>
          
          <button className="btn btn-outline mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="flex items-center gap-2 mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              <img src="/logo.png" alt="REVAT LTD Logo" style={{ height: '40px' }} />
              REVAT LTD
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              Capturing Moments. Creating Memories. Professional photography services for weddings, portraits, events, and commercial needs.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/studio" className="footer-link">Our Studio</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/process" className="footer-link">Our Process</Link>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <Link to="/testimonials" className="footer-link">Testimonials</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
          
          <div>
            <h4 className="footer-title">Services</h4>
            <Link to="/services" className="footer-link">Weddings</Link>
            <Link to="/services" className="footer-link">Portraits</Link>
            <Link to="/services" className="footer-link">Events</Link>
            <Link to="/services" className="footer-link">Commercial</Link>
            <Link to="/services" className="footer-link">Real Estate</Link>
          </div>
          
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="flex gap-2 mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <MapPin size={20} />
              <span>60a Central Parade, New Addington, Croydon, CR0 0JD</span>
            </div>
            <div className="flex gap-2 mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <Phone size={20} />
              <span>07771 078478</span>
            </div>
            <div className="flex gap-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <Mail size={20} />
              <span>info@revatltd.co.uk</span>
            </div>
          </div>
        </div>
        
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} REVAT LTD. All rights reserved. Registered in United Kingdom.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/privacy" className="footer-link" style={{ display: 'inline', marginBottom: 0 }}>Privacy Policy</Link>
            <Link to="/terms" className="footer-link" style={{ display: 'inline', marginBottom: 0 }}>Terms & Conditions</Link>
          </div>
        </div>
      </footer>

      {showCookie && (
        <div className="cookie-banner">
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>We use cookies</h4>
            <p className="text-light" style={{ fontSize: '0.875rem' }}>We use cookies to improve your experience on our site and analyze traffic. By clicking Accept, you consent to our use of cookies.</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }} onClick={() => setShowCookie(false)}>Reject All</button>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => setShowCookie(false)}>Accept All</button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`splash-screen ${!showSplash ? 'splash-fade-out' : ''}`}>
        <div className="splash-content flex flex-col items-center">
          <img src="/logo.png" alt="REVAT LTD Logo" className="mb-4" style={{ height: '100px' }} />
          <h1 className="heading-xl">REVAT LTD</h1>
        </div>
      </div>
      
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
