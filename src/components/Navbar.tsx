import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: {
      scale: 0.95
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glassmorphism shadow-xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link 
              to="/" 
              className="text-2xl font-bold text-white hover:text-accent-400 transition-all duration-300"
            >
              <span className="text-gradient bg-gradient-to-r from-accent-400 to-secondary-500">
                E&J Signs
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/embroidery', label: 'Embroidery' },
              { path: '/printing', label: 'Printing' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <motion.div 
                key={item.path}
                variants={linkVariants} 
                whileHover="hover" 
                whileTap="tap"
                className="relative"
              >
                <Link 
                  to={item.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                    isActive(item.path)
                      ? 'text-white bg-white/10 shadow-lg'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-secondary-500/20 rounded-xl border border-accent-400/30"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link to="/contact">
              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl border border-accent-400/20"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                  y: -2
                }}
              >
                Get Quote
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-accent-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Simple version for now */}
        <div className="md:hidden mt-4 space-y-2">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/embroidery', label: 'Embroidery' },
            { path: '/printing', label: 'Printing' },
            { path: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-white bg-white/10'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar; 