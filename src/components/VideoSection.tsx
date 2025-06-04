import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

function VideoSection() {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Enhanced intersection observer with better mobile performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) { // Lower threshold for mobile
          setIsLoading(false);
        }
      },
      { 
        threshold: [0.1, 0.3, 0.5], // Multiple thresholds for better mobile detection
        rootMargin: '50px 0px' // Vertical margin only for better mobile performance
      }
    );

    const container = document.querySelector('#video-container');
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, []);

  const onReady = (event: any) => {
    videoRef.current = event.target;
    setIsLoading(false);
  };

  const onStateChange = (event: any) => {
    setIsPlaying(event.data === 1); // 1 = playing
  };

  const onError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      mute: 0,
      controls: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Enhanced background elements with better mobile performance */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.01, 0.03, 0.01],
            rotate: [0, 180]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-16 sm:-right-32 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-gradient-to-br from-primary-500/5 to-accent-500/5 sm:from-primary-500/10 sm:to-accent-500/10 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.01, 0.03],
            rotate: [180, 0]
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-16 sm:-left-32 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 bg-gradient-to-tr from-accent-500/5 to-primary-500/5 sm:from-accent-500/10 sm:to-primary-500/10 rounded-full blur-2xl sm:blur-3xl"
        />
      </div>

      <div className="container mx-auto text-center px-4 sm:px-6 relative z-10">
        {/* Enhanced responsive header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 sm:mb-12 md:mb-16 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-4 sm:mb-6 backdrop-blur-sm"
          >
            <motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
                backgroundColor: ['#2563eb', '#dc2626', '#2563eb']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-400 rounded-full mr-2"
            />
            <span className="text-neutral-600 text-xs sm:text-sm font-medium">Our Work in Action</span>
          </motion.div>

          {/* Fluid typography with clamp() for perfect scaling */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-primary-900 leading-tight">
            See Our <span className="text-gradient-blue-red bg-gradient-to-r from-primary-500 to-accent-600 bg-clip-text text-transparent">Craftsmanship</span>
          </h2>
          <div className="w-full max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4 sm:px-0">
              Watch how we bring your custom designs to life with precision, quality, and attention to detail that sets us apart
            </p>
          </div>
        </motion.div>

        {/* Enhanced responsive video container */}
        <div className="mx-auto max-w-5xl">
          <motion.div 
            id="video-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.01, 
              y: -2,
              transition: { duration: 0.3 }
            }}
            className="group relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
          >
            {/* Enhanced glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 sm:from-primary-500/20 sm:via-accent-500/20 sm:to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl"></div>
            
            {/* Video container with enhanced mobile responsiveness */}
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-neutral-200/10 sm:border-neutral-200/20 aspect-video bg-neutral-900">
              {/* Enhanced loading state */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center bg-neutral-900 z-10 p-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-primary-500 border-t-transparent rounded-full"
                  />
                  <span className="mt-2 sm:mt-0 sm:ml-3 text-white text-sm sm:text-base">Loading video...</span>
                </div>
              )}

              {/* YouTube player with enhanced mobile support */}
              {!isLoading && !hasError && (
                <YouTube
                  videoId="dQw4w9WgXcQ" // Replace with your actual video ID
                  opts={opts}
                  onReady={onReady}
                  onStateChange={onStateChange}
                  onError={onError}
                  className="w-full h-full"
                  iframeClassName="w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl"
                />
              )}

              {/* Enhanced error state with mobile-first design */}
              {hasError && (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center border border-neutral-200 cursor-pointer relative overflow-hidden p-4 sm:p-6">
                  {/* Optimized background pattern for mobile */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%), 
                        linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.05) 75%), 
                        linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.05) 75%)
                      `,
                      backgroundSize: '15px 15px',
                      backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px'
                    }}></div>
                  </div>

                  <div className="text-center relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-primary-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <motion.svg 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </motion.svg>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-neutral-700 text-lg sm:text-xl font-bold mb-2">
                        Custom Process Video
                      </p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-neutral-500 text-sm sm:text-base">
                        Showcasing our professional printing and embroidery process
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Enhanced play indicator with touch-friendly design */}
              {!isPlaying && !isLoading && !hasError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Enhanced responsive features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12"
          >
            {[
              { icon: '🎯', title: 'Precision Work', desc: 'Every detail matters', color: 'from-primary-500 to-primary-600' },
              { icon: '⚡', title: 'Fast Process', desc: 'Quick turnaround', color: 'from-accent-500 to-accent-600' },
              { icon: '🏆', title: 'Quality First', desc: 'Premium materials', color: 'from-primary-600 to-accent-500' },
              { icon: '✨', title: 'Custom Design', desc: 'Your vision realized', color: 'from-accent-600 to-primary-500' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }} // Touch feedback
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 p-2 sm:p-3 rounded-full bg-gradient-to-r ${feature.color} text-white inline-block shadow-md`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-primary-900 mb-1 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 