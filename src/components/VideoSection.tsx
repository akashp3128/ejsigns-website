import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import YouTube from 'react-youtube';

interface VideoPlayerState {
  isPlaying: boolean;
  progress: number;
  volume: number;
  isFullscreen: boolean;
  quality: string;
  isPictureInPicture: boolean;
  loadingState: 'idle' | 'loading' | 'loaded' | 'error';
}

function VideoSection() {
  const videoRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoState, setVideoState] = useState<VideoPlayerState>({
    isPlaying: false,
    progress: 0,
    volume: 80,
    isFullscreen: false,
    quality: 'auto',
    isPictureInPicture: false,
    loadingState: 'idle'
  });

  // Advanced motion values for smooth interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Intersection Observer for performance optimization
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setVideoState(prev => ({ ...prev, loadingState: 'loading' }));
        }
      },
      { 
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Enhanced video event handlers
  const onReady = useCallback((event: any) => {
    videoRef.current = event.target;
    setVideoState(prev => ({ ...prev, loadingState: 'loaded' }));
  }, []);

  const onStateChange = useCallback((event: any) => {
    const isPlaying = event.data === 1;
    setVideoState(prev => ({ ...prev, isPlaying }));
  }, []);

  const onError = useCallback((error: any) => {
    console.error('Video error:', error);
    setVideoState(prev => ({ ...prev, loadingState: 'error' }));
  }, []);

  // Advanced mouse tracking for interactive effects
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    
    mouseX.set((x - 0.5) * 20);
    mouseY.set((y - 0.5) * 20);
  }, [mouseX, mouseY]);

  // Picture-in-Picture support
  const togglePictureInPicture = useCallback(async () => {
    if (!videoRef.current) return;
    
    try {
      const iframe = videoRef.current.getIframe();
      if (document.pictureInPictureEnabled && iframe) {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
          setVideoState(prev => ({ ...prev, isPictureInPicture: false }));
        } else {
          await iframe.requestPictureInPicture();
          setVideoState(prev => ({ ...prev, isPictureInPicture: true }));
        }
      }
    } catch (error) {
      console.error('Picture-in-Picture error:', error);
    }
  }, []);

  // Advanced YouTube player options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      mute: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      cc_load_policy: 1, // Enable captions for accessibility
      hl: 'en',
      playsinline: 1,
      enablejsapi: 1,
      origin: window.location.origin
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Enhanced Background with CSS Custom Properties */}
      <div 
        className="absolute inset-0"
        style={{
          '--mouse-x': `${springX.get()}px`,
          '--mouse-y': `${springY.get()}px`
        } as React.CSSProperties}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02],
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(calc(var(--mouse-x) * 0.1), calc(var(--mouse-y) * 0.1))`
          }}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.02, 0.05],
            rotate: [360, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-tr from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(calc(var(--mouse-x) * -0.1), calc(var(--mouse-y) * -0.1))`
          }}
        />
      </div>

      <div className="container mx-auto text-center px-6 relative z-10">
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

        {/* Enhanced Video Container */}
        <div className="mx-auto max-w-5xl">
          <motion.div 
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
          >
            {/* Enhanced glowing border with mouse tracking */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
              style={{
                background: `radial-gradient(circle at ${springX.get() + 50}% ${springY.get() + 50}%, rgba(245, 158, 11, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(245, 158, 11, 0.1) 100%)`
              }}
            />
            
            {/* Video container with aspect ratio and containment */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200/20 aspect-video bg-neutral-900">
              {/* Loading state */}
              {videoState.loadingState === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full"
                  />
                  <span className="ml-3 text-white">Loading video...</span>
                </div>
              )}

              {/* Enhanced YouTube player with conditional rendering */}
              {isIntersecting && (
                <YouTube
                  videoId="dQw4w9WgXcQ" // Replace with actual video ID
                  opts={opts}
                  onReady={onReady}
                  onStateChange={onStateChange}
                  onError={onError}
                  className="w-full h-full"
                  iframeClassName="w-full h-full rounded-3xl"
                />
              )}

              {/* Custom control overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between p-6 pointer-events-none group-hover:pointer-events-auto transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => videoRef.current?.playVideo()}
                    className="pointer-events-auto bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                    aria-label={videoState.isPlaying ? "Pause video" : "Play video"}
                  >
                    {videoState.isPlaying ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </motion.button>

                  {/* Picture-in-Picture button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePictureInPicture}
                    className="pointer-events-auto bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                    aria-label="Picture in picture"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>
                    </svg>
                  </motion.button>
                </div>

                {/* Quality and state indicators */}
                <div className="flex items-center space-x-2">
                  <span className="text-white/80 text-sm bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                    {videoState.quality}
                  </span>
                  {videoState.isPictureInPicture && (
                    <span className="text-white/80 text-sm bg-green-500/30 px-2 py-1 rounded-full backdrop-blur-sm">
                      PiP
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Error state */}
              {videoState.loadingState === 'error' && (
                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center border border-neutral-200 cursor-pointer relative overflow-hidden">
                  <div className="text-center relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    >
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                    <p className="text-neutral-700 text-xl font-bold mb-2">Custom Process Video</p>
                    <p className="text-neutral-500 text-base">Showcasing our professional printing and embroidery process</p>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced accessibility features */}
            <div className="sr-only">
              <p>Video player showing our custom printing and embroidery process</p>
              <p>Use spacebar to play/pause, arrow keys to seek</p>
            </div>
          </motion.div>

          {/* Enhanced video features with better grid layout */}
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