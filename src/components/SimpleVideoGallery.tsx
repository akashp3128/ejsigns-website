import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  youtubeId: string;
}

interface SimpleVideoGalleryProps {
  videos: VideoItem[];
  title?: string;
}

const SimpleVideoGallery: React.FC<SimpleVideoGalleryProps> = ({ 
  videos, 
  title = "Our Work Gallery" 
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});

  // Preload images for better performance
  useEffect(() => {
    videos.forEach(video => {
      const img = new Image();
      img.onload = () => {
        setImageLoadStates(prev => ({ ...prev, [video.id]: true }));
      };
      img.src = video.thumbnail;
    });
  }, [videos]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-secondary-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced responsive header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 sm:mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Explore our diverse portfolio of custom designs and professional processes
          </p>
        </motion.div>

        {/* Enhanced responsive video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1] // Custom easing for smoother animation
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }} // Touch feedback
              className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Enhanced thumbnail container */}
              <div className="relative aspect-video overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-neutral-100">
                {/* Loading skeleton */}
                {!imageLoadStates[video.id] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse" />
                )}

                <motion.img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ 
                    scale: imageLoadStates[video.id] ? 1 : 1.1,
                    opacity: imageLoadStates[video.id] ? 1 : 0
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Enhanced play overlay with better mobile interaction */}
                <motion.div 
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255,255,255,0.25)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <svg className="w-5 h-5 sm:w-8 sm:h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </motion.div>
                
                {/* Enhanced duration badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 rounded-md font-medium"
                >
                  {video.duration}
                </motion.div>

                {/* Accessibility label */}
                <div className="sr-only">
                  Play video: {video.title}
                </div>
              </div>

              {/* Enhanced content area */}
              <div className="p-4 sm:p-6">
                <motion.h3 
                  className="font-bold text-base sm:text-lg text-primary-900 mb-2 line-clamp-2 leading-tight group-hover:text-accent-600 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {video.title}
                </motion.h3>
                <motion.p 
                  className="text-neutral-600 text-sm sm:text-base line-clamp-3 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {video.description}
                </motion.p>

                {/* Subtle hover indicator */}
                <motion.div
                  className="mt-3 flex items-center text-accent-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                >
                  <span>Watch now</span>
                  <motion.svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {videos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 sm:py-20"
          >
            <div className="text-4xl sm:text-6xl mb-4">🎬</div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-700 mb-2">No videos available</h3>
            <p className="text-neutral-500 text-sm sm:text-base">Check back later for new content</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced video modal with better mobile experience */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.4
              }}
              className="relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl aspect-video bg-black rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced close button */}
              <motion.button
                onClick={() => setSelectedVideo(null)}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                aria-label="Close video"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              
              {/* Video title overlay */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 bg-black/60 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium max-w-[60%] truncate"
              >
                {selectedVideo.title}
              </motion.div>
              
              {/* Enhanced iframe with loading state */}
              <motion.iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1`}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; encrypted-media; fullscreen"
                title={selectedVideo.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              {/* Loading indicator */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-neutral-900 pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-accent-500 border-t-transparent rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CSS with better mobile support */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Enhanced touch interactions */
        @media (hover: none) and (pointer: coarse) {
          .group:hover .group-hover\\:opacity-100 {
            opacity: 1;
          }
          .group:active .group-hover\\:scale-105 {
            transform: scale(1.02);
          }
        }
        
        /* Optimized animations for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SimpleVideoGallery; 