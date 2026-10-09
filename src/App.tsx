import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransition } from './components/PageTransition';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Join } from './pages/Join';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/journey"
          element={
            <PageTransition>
              <Journey />
            </PageTransition>
          }
        />
        <Route
          path="/join"
          element={
            <PageTransition>
              <Join />
            </PageTransition>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-cream-100 flex flex-col font-sans selection:bg-saffron-500 selection:text-white">
        <ScrollToTop />
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
