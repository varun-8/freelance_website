import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import SmoothScroller from './components/SmoothScroller';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/ServicesPage'));
const Pricing = lazy(() => import('./pages/PricingPage'));
const About = lazy(() => import('./pages/AboutPage'));
const Contact = lazy(() => import('./pages/ContactPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`relative min-h-screen flex flex-col font-sans selection:bg-cyan-400 selection:text-black transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Background Dot Pattern */}
      <div className={`fixed inset-0 z-0 bg-dot-pattern pointer-events-none ${
        isDark ? 'opacity-20' : 'opacity-10'
      }`}></div>
      
      <Navbar />
      <main className="flex-grow z-10 pt-20">
        <Suspense fallback={<div className={`min-h-screen flex items-center justify-center font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <div className="z-10 mt-20">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SmoothScroller>
          <ScrollToTop />
          <MainContent />
        </SmoothScroller>
      </Router>
    </ThemeProvider>
  );
}

export default App;
