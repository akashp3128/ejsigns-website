import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

function VideoSection() {
  const videoRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getIframe().getBoundingClientRect();
        // Check if video is in viewport (at least 50% visible)
        const isInViewport = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
        
        if (isInViewport) {
          // videoRef.current.playVideo();
          console.log('Video should play now - YouTube video will auto-play when real video ID is provided');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onReady = (event: any) => {
    videoRef.current = event.target;
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      mute: 1, // Mute for autoplay to work in most browsers
      controls: 1,
      showinfo: 0,
      rel: 0
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.02, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-tr from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-6"
          >
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-neutral-600 text-sm font-medium">Our Work in Action</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-900">
            See Our <span className="text-gradient bg-gradient-to-r from-accent-500 to-secondary-600">Craftsmanship</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Watch how we bring your custom designs to life with precision, quality, and attention to detail that sets us apart
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.div 
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
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200/20">
              {/* Using placeholder video ID - replace with real video when available */}
              <YouTube
                videoId="dQw4w9WgXcQ" // Placeholder YouTube video ID
                opts={opts}
                onReady={onReady}
                onError={(error) => console.log('Video error:', error)}
                className="w-full aspect-video"
              />
              
              {/* Fallback placeholder that shows when video fails to load */}
              <div className="hidden bg-neutral-100 aspect-video flex items-center justify-center border border-neutral-200 cursor-pointer relative overflow-hidden" id="video-fallback">
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
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-neutral-700 text-xl font-bold mb-2"
                  >
                    Custom Process Video
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-neutral-500 text-base"
                  >
                    Showcasing our professional printing and embroidery process
                  </motion.p>
                </div>
              </div>
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
              { icon: '🎯', title: 'Precision Work', desc: 'Every detail matters' },
              { icon: '⚡', title: 'Fast Process', desc: 'Quick turnaround' },
              { icon: '🏆', title: 'Quality First', desc: 'Premium materials' },
              { icon: '✨', title: 'Custom Design', desc: 'Your vision realized' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
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