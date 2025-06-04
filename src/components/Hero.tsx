import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '📋' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '24h', label: 'Quick Turnaround', icon: '⚡' },
    { number: '100%', label: 'Quality Guaranteed', icon: '🏆' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-modern"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large background circles */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent-500/20 to-secondary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary-500/20 to-accent-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent-400/30 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-secondary-400/30 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '4s' }}
          className="absolute top-1/3 left-1/3 w-3 h-3 bg-accent-300/40 rounded-full"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto text-center px-6 py-20 max-w-7xl"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-neutral-200 text-sm font-medium">Professional Printing & Embroidery</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Transform Your</span>
          <br />
          <span className="text-gradient bg-gradient-to-r from-accent-400 via-accent-500 to-secondary-500">
            Brand Identity
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
            Custom creations, crafted with precision. Professional embroidery and printing services for businesses, teams, and organizations.
          </p>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Custom Embroidery', 'Screen Printing', 'Fast Turnaround', 'Professional Quality'].map((feature, index) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-neutral-300 text-sm backdrop-blur-sm"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-2xl text-lg transition-all duration-300 shadow-2xl border border-accent-400/20 overflow-hidden"
            >
              <span className="relative z-10">Get Your Quote</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </Link>
          
          <Link to="/about">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl text-lg transition-all duration-300 border border-white/20 backdrop-blur-sm"
            >
              View Our Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 w-full max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.7, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1, duration: 0.5, type: "spring" }}
                    className="text-2xl mb-2 filter drop-shadow-lg"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-accent-400 mb-2 group-hover:text-accent-300 transition-colors duration-300"
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 + index * 0.1, duration: 0.6 }}
                    className="text-neutral-300 text-sm font-medium leading-tight"
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-neutral-400"
        >
          <span className="text-xs mb-2">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero; 