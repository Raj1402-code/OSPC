import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Journey', path: '/journey' },
    { name: 'Join the Crew', path: '/join' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-2xl py-3 border-b border-white/10'
          : 'bg-charcoal-950/60 backdrop-blur-md py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 flex items-center justify-center shadow-lg shadow-saffron-500/20 group-hover:scale-105 transition-transform duration-300 border border-saffron-400/30">
              <Compass className="w-5 h-5 text-white animate-spin-slow group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-cream-50 group-hover:text-saffron-400 transition-colors">
                VJ SIDHU <span className="text-saffron-500">/</span> VLOGS
              </span>
              <span className="text-[10px] font-mono tracking-wider text-cream-400 uppercase -mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent animate-pulse" />
                Unofficial Fan Hub
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-charcoal-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-cream-300/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-saffron-500/30 to-amber-500/20 border border-saffron-500/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <AnimatedButton
              to="/join"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-4 h-4 text-amber-200" />}
            >
              Join the Crew
            </AnimatedButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-charcoal-800 text-cream-200 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-saffron-500"
            aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-charcoal-950/95 backdrop-blur-2xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-saffron-500/20 text-saffron-400 border border-saffron-500/30'
                          : 'text-cream-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-2">
                <AnimatedButton
                  to="/join"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Join the Crew
                </AnimatedButton>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-cream-400 font-mono">
                  Unofficial fan tribute project for college demo
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
