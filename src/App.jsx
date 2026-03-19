import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import SmoothScroller from './components/SmoothScroller';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/ServicesPage'));
const Process = lazy(() => import('./pages/ProcessPage'));
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

function App() {
  return (
    <Router>
      <SmoothScroller>
        <ScrollToTop />
        <div className="relative min-h-screen bg-black text-white flex flex-col font-sans selection:bg-neonBlue selection:text-black">
          {/* Optimized lightweight background */}
          <div className="fixed inset-0 z-0 bg-dot-pattern pointer-events-none opacity-30"></div>
          
          {/* Animated Glows - GPU accelerated with will-change */}
          <div className="fixed top-[-50%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-neonBlue/8 blur-[150px] pointer-events-none -z-10 animate-blob" style={{ willChange: 'transform' }}></div>
          <div className="fixed bottom-[-50%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/15 blur-[150px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s', willChange: 'transform' }}></div>

          <Navbar />
          <main className="flex-grow z-10 pt-20">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-neonBlue">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/process" element={<Process />} />
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
      </SmoothScroller>
    </Router>
  );
}

export default App;
