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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        >
          Our Work in Action
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Watch how we bring your custom designs to life with precision and quality
        </motion.p>
        <div className="mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Using placeholder video ID - replace with real video when available */}
            <YouTube
              videoId="dQw4w9WgXcQ" // Placeholder YouTube video ID
              opts={opts}
              onReady={onReady}
              onError={(error) => console.log('Video error:', error)}
              className="w-full aspect-video"
            />
            
            {/* Fallback placeholder that shows when video fails to load */}
            <div className="hidden bg-gray-200 aspect-video flex items-center justify-center border-2 border-gray-300 cursor-pointer" id="video-fallback">
              <div className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-16 h-16 mx-auto mb-4 bg-primaryRed rounded-full flex items-center justify-center shadow-lg"
                >
                  <motion.svg 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 text-white" 
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
                  className="text-gray-600 text-lg font-medium"
                >
                  YouTube Video Will Load Here
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-gray-500 text-sm mt-2"
                >
                  Showcasing our custom printing and embroidery process
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 