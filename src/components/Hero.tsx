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
      {/* Layered Background with Transparency */}
      <div className="absolute inset-0">
        {/* Base gradient with transparency */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-900/90"></div>
        
        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-primary-800/60"></div>
        
        {/* Radial gradient overlay for focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary-800/30 to-primary-900/80"></div>
      </div>
      
      {/* Enhanced Animated Background Elements with Transparency */}
      <div className="absolute inset-0">
        {/* Large background circles with transparency */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.08, 0.15]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-accent-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-500/20 to-primary-500/25 rounded-full blur-3xl"
        />
        
        {/* Medium floating orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.05, 0.1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-secondary-500/15 to-accent-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 0.9, 1.1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-l from-primary-400/15 to-accent-500/20 rounded-full blur-2xl"
        />
        
        {/* Enhanced floating geometric shapes with transparency */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary-400/40 rounded-full shadow-lg shadow-primary-500/20"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-accent-400/40 rounded-full shadow-lg shadow-accent-500/20"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '4s' }}
          className="absolute top-1/3 left-1/3 w-3 h-3 bg-secondary-300/50 rounded-full shadow-lg shadow-secondary-500/20"
        />
      </div>

      {/* Subtle Grid Pattern Overlay with Transparency */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glassmorphism Content Backdrop */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-primary-900/10 to-transparent"></div>

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
          className="relative inline-flex items-center px-4 py-2 rounded-full mb-8 overflow-hidden"
        >
          {/* Multi-layer background with transparency */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/6 to-white/10 rounded-full"></div>
          <div className="absolute inset-0 backdrop-blur-sm border border-primary-400/30 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-accent-800/20 rounded-full"></div>
          
          {/* Floating background element */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 -right-2 w-8 h-8 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-sm"
          />
          
          <motion.span 
            animate={{ 
              scale: [1, 1.2, 1],
              backgroundColor: ['rgba(59,130,246,0.8)', 'rgba(220,38,38,0.8)', 'rgba(59,130,246,0.8)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10 w-2 h-2 bg-primary-400 rounded-full mr-2 shadow-lg"
          />
          <span className="relative z-10 text-neutral-200 text-sm font-medium">Professional Printing & Embroidery</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white drop-shadow-lg">Transform Your</span>
          <br />
          <span className="text-gradient-blue-red bg-gradient-to-r from-primary-400 via-accent-500 to-primary-500 bg-clip-text text-transparent drop-shadow-sm">
            Brand Identity
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed drop-shadow-sm">
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
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="group relative px-4 py-2 rounded-full text-neutral-200 text-sm cursor-pointer overflow-hidden"
            >
              {/* Multi-layered background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/6 via-white/3 to-white/6 rounded-full"></div>
              <div className="absolute inset-0 backdrop-blur-sm border border-white/15 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-full"></div>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(220,38,38,0.25))"
                }}
              />
              
              {/* Floating accent */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3 + index * 0.5, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
                className={`absolute top-0 right-1 w-1 h-1 rounded-full ${
                  index % 2 === 0 ? 'bg-primary-400/60' : 'bg-accent-400/60'
                }`}
              />
              
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">{feature}</span>
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
                boxShadow: "0 25px 50px rgba(220, 38, 38, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 text-white font-semibold rounded-2xl text-lg transition-all duration-300 overflow-hidden"
            >
              {/* Multi-layered button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/80 to-accent-700/80 rounded-2xl"></div>
              <div className="absolute inset-0 backdrop-blur-sm border border-accent-400/40 rounded-2xl"></div>
              
              {/* Floating background elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-3 w-12 h-12 bg-gradient-to-br from-accent-300/30 to-primary-400/30 rounded-full blur-md"
              />
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                whileHover={{
                  background: "linear-gradient(135deg, #f87171, #dc2626, #b91c1c)"
                }}
              />
              
              {/* Enhanced border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent-300/50 transition-all duration-300"
                whileHover={{
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)"
                }}
              />
              
              <span className="relative z-10">Get Your Quote</span>
            </motion.button>
          </Link>
          
          <Link to="/about">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 text-white font-semibold rounded-2xl text-lg transition-all duration-300 overflow-hidden"
            >
              {/* Multi-layered transparent background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 rounded-2xl"></div>
              <div className="absolute inset-0 backdrop-blur-md border border-white/30 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-primary-800/10 rounded-2xl"></div>
              
              {/* Floating background elements */}
              <motion.div
                animate={{ 
                  scale: [1.1, 0.9, 1.1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [180, 270, 180]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-3 w-10 h-10 bg-gradient-to-tr from-primary-400/20 to-accent-400/30 rounded-full blur-lg"
              />
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/15 to-accent-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(220,38,38,0.1))"
                }}
              />
              
              {/* Enhanced border effects */}
              <div className="absolute inset-0 rounded-2xl border border-white/40 group-hover:border-primary-400/50 transition-all duration-300"></div>
              <motion.div
                className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent-400/30 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 0 20px rgba(59,130,246,0.2), inset 0 0 20px rgba(255,255,255,0.05)"
                }}
              />
              
              <span className="relative z-10">View Our Work</span>
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
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden"
              >
                {/* Multi-layered transparent background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-white/8 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-primary-800/10 rounded-2xl"></div>
                <div className="absolute inset-0 backdrop-blur-md border border-white/20 rounded-2xl"></div>
                
                {/* Animated floating background elements */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.15, 0.05],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ 
                    duration: 8 + index * 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-400/20 to-accent-400/30 rounded-full blur-lg"
                />
                <motion.div
                  animate={{ 
                    scale: [1.1, 0.9, 1.1],
                    opacity: [0.1, 0.05, 0.1],
                    rotate: [180, 270, 180]
                  }}
                  transition={{ 
                    duration: 10 + index * 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-tr from-accent-500/20 to-primary-500/30 rounded-full blur-md"
                />

                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/15 to-accent-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(220,38,38,0.2))"
                  }}
                />
                
                {/* Enhanced border effects */}
                <div className="absolute inset-0 rounded-2xl border border-white/30 group-hover:border-primary-400/50 transition-all duration-300"></div>
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent-400/30 transition-all duration-500"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(59,130,246,0.3), inset 0 0 20px rgba(220,38,38,0.1)"
                  }}
                />

                {/* Content with enhanced effects */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="text-2xl mb-3 filter drop-shadow-lg"
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(59,130,246,0.3)",
                          "0 0 20px rgba(220,38,38,0.3)",
                          "0 0 10px rgba(59,130,246,0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {stat.icon}
                    </motion.span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-accent-300 transition-all duration-300"
                  >
                    <motion.span
                      className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent drop-shadow-sm"
                      whileHover={{
                        background: "linear-gradient(135deg, #ef4444, #2563eb, #ef4444)",
                        backgroundSize: "200% 100%",
                        animation: "gradient-flow 2s ease-in-out infinite"
                      }}
                    >
                      {stat.number}
                    </motion.span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 + index * 0.1, duration: 0.6 }}
                    className="text-neutral-200 text-sm font-medium leading-tight group-hover:text-white transition-colors duration-300"
                  >
                    {stat.label}
                  </motion.div>

                  {/* Subtle particle effects */}
                  <motion.div
                    className="absolute top-2 right-2 w-1 h-1 bg-primary-400/60 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                  <motion.div
                    className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent-400/60 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </div>

                {/* Enhanced shadow layers */}
                <div className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 pointer-events-none"></div>
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(59,130,246,0.15), 0 0 0 1px rgba(220,38,38,0.1)"
                  }}
                />
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