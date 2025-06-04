import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // Lower threshold for better mobile UX
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const linkVariants = {
    hover: {
      scale: 1.02,
      y: -1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: {
      scale: 0.98
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren"
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    },
    open: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/embroidery', label: 'Embroidery' },
    { path: '/printing', label: 'Printing' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
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
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-20"
            >
              <Link 
                to="/" 
                className="text-xl sm:text-2xl font-bold transition-all duration-300 group"
              >
                <motion.div 
                  className="relative inline-flex items-center"
                  whileHover={{ 
                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))" 
                  }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                  
                  {/* Main logo text */}
                  <span className="relative bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 bg-clip-text text-transparent font-extrabold tracking-tight">
                    E&J
                  </span>
                  <span className="relative text-white mx-1 font-light">•</span>
                  <span className="relative bg-gradient-to-r from-accent-500 to-accent-400 bg-clip-text text-transparent font-bold tracking-wide">
                    Signs
                  </span>
                  
                  {/* Subtle underline animation */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div 
                  key={item.path}
                  variants={linkVariants} 
                  whileHover="hover" 
                  whileTap="tap"
                  className="relative"
                >
                  <Link 
                    to={item.path}
                    className={`px-3 xl:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                      isActive(item.path)
                        ? 'text-white bg-white/10 shadow-lg'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl border border-primary-400/30"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Link to="/contact">
                <motion.button
                  className="px-4 xl:px-6 py-2.5 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl border border-accent-400/20"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
                    y: -2
                  }}
                >
                  Get Quote
                </motion.button>
              </Link>
            </motion.div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-20 p-2 text-white hover:text-accent-400 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  className="absolute left-0 top-1 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 top-3 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 bottom-1 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      custom={index}
                      variants={mobileMenuItemVariants}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          isActive(item.path)
                            ? 'text-white bg-white/10 border-l-4 border-accent-400'
                            : 'text-neutral-300 hover:text-white hover:bg-white/5 hover:border-l-4 hover:border-accent-400/50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    custom={navItems.length}
                    variants={mobileMenuItemVariants}
                    className="pt-4"
                  >
                    <Link 
                      to="/contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-3 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 text-white font-semibold rounded-lg text-base transition-all duration-300 shadow-lg"
                      >
                        Get Quote
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar; 