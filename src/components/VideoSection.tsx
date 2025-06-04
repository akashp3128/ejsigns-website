import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

function VideoSection() {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Simple intersection observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setIsLoading(false);
        }
      },
      { threshold: 0.5 }
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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Beautiful background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02],
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.02, 0.05],
            rotate: [360, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-tr from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto text-center px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-6 backdrop-blur-sm"
          >
            <motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
                backgroundColor: ['#f59e0b', '#ef4444', '#f59e0b']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-accent-400 rounded-full mr-2"
            />
            <span className="text-neutral-600 text-sm font-medium">Our Work in Action</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-900">
            See Our <span className="text-gradient bg-gradient-to-r from-accent-500 to-secondary-600 bg-clip-text text-transparent">Craftsmanship</span>
          </h2>
          <div className="w-full max-w-4xl mx-auto">
            <p className="text-xl text-neutral-600 leading-relaxed">
              Watch how we bring your custom designs to life with precision, quality, and attention to detail that sets us apart
            </p>
          </div>
        </motion.div>

        {/* Video Container */}
        <div className="mx-auto max-w-5xl">
          <motion.div 
            id="video-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
            
            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200/20 aspect-video bg-neutral-900">
              {/* Loading state */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full"
                  />
                  <span className="ml-3 text-white">Loading video...</span>
                </div>
              )}

              {/* YouTube player */}
              {!isLoading && !hasError && (
                <YouTube
                  videoId="dQw4w9WgXcQ" // Replace with your actual video ID
                  opts={opts}
                  onReady={onReady}
                  onStateChange={onStateChange}
                  onError={onError}
                  className="w-full h-full"
                  iframeClassName="w-full h-full rounded-3xl"
                />
              )}

              {/* Error state with beautiful fallback */}
              {hasError && (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center border border-neutral-200 cursor-pointer relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%), 
                        linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%), 
                        linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)
                      `,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}></div>
                  </div>

                  <div className="text-center relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    >
                      <motion.svg 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="w-10 h-10 text-white ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </motion.svg>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-neutral-700 text-xl font-bold mb-2">
                        Custom Process Video
                      </p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-neutral-500 text-base">
                        Showcasing our professional printing and embroidery process
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Simple play indicator */}
              {!isPlaying && !isLoading && !hasError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Video features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: '🎯', title: 'Precision Work', desc: 'Every detail matters', color: 'from-blue-500 to-blue-600' },
              { icon: '⚡', title: 'Fast Process', desc: 'Quick turnaround', color: 'from-yellow-500 to-orange-600' },
              { icon: '🏆', title: 'Quality First', desc: 'Premium materials', color: 'from-green-500 to-emerald-600' },
              { icon: '✨', title: 'Custom Design', desc: 'Your vision realized', color: 'from-purple-500 to-pink-600' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-2xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`text-3xl mb-3 p-3 rounded-full bg-gradient-to-r ${feature.color} text-white inline-block shadow-lg`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-primary-900 mb-1">{feature.title}</h3>
                <p className="text-neutral-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 