import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useVideoIntersection, useMouseTracking } from './VideoPlayerHooks';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: 'embroidery' | 'printing' | 'design' | 'process';
  featured?: boolean;
  youtubeId: string;
}

interface VideoGalleryProps {
  videos: VideoItem[];
  title?: string;
  description?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ 
  videos, 
  title = "Our Work Gallery", 
  description = "Explore our diverse portfolio of custom designs and professional processes" 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry' | 'list'>('masonry');
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const { mousePosition, handleMouseMove } = useMouseTracking();

  // Filter videos based on category
  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Work', icon: '🎬' },
    { id: 'embroidery', label: 'Embroidery', icon: '🧵' },
    { id: 'printing', label: 'Printing', icon: '🖨️' },
    { id: 'design', label: 'Design', icon: '🎨' },
    { id: 'process', label: 'Process', icon: '⚙️' }
  ];

  // Enhanced video card component
  const VideoCard: React.FC<{ video: VideoItem; index: number }> = ({ video, index }) => {
    const { isIntersecting, elementRef } = useVideoIntersection(0.1);
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Advanced motion values for 3D effects
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const scale = useTransform(rotateY, [-30, 30], [0.95, 1.05]);

    const handleCardMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      
      rotateX.set((y - 0.5) * 20);
      rotateY.set((x - 0.5) * 20);
    };

    const handleCardMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      setIsHovered(false);
    };

    return (
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ 
          rotateX, 
          rotateY, 
          scale,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleCardMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleCardMouseLeave}
        whileHover={{ y: -10 }}
        className={`
          group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
          transition-all duration-500 overflow-hidden cursor-pointer
          ${video.featured ? 'ring-2 ring-accent-400 ring-opacity-50' : ''}
          ${viewMode === 'list' ? 'flex items-center space-x-6 p-6' : ''}
        `}
        onClick={() => {
          setSelectedVideo(video);
          setIsModalOpen(true);
        }}
      >
        {/* Gradient overlay for featured videos */}
        {video.featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 z-10 pointer-events-none" />
        )}

        {/* Video thumbnail container */}
        <div className={`
          relative overflow-hidden rounded-xl
          ${viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-video'}
        `}>
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse" />
          )}

          {/* Thumbnail image */}
          <motion.img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onLoad={() => setImageLoaded(true)}
            initial={{ scale: 1.1 }}
            animate={{ scale: imageLoaded ? 1 : 1.1 }}
          />

          {/* Play overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl"
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
            {video.duration}
          </div>

          {/* Category badge */}
          <div className="absolute top-2 left-2 bg-accent-500/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm capitalize">
            {video.category}
          </div>

          {/* Featured badge */}
          {video.featured && (
            <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Video info */}
        <div className={`${viewMode === 'list' ? 'flex-1' : 'p-6'}`}>
          <motion.h3 
            className="font-bold text-lg text-primary-900 mb-2 line-clamp-2"
            style={{ transform: 'translateZ(50px)' }}
          >
            {video.title}
          </motion.h3>
          <motion.p 
            className="text-neutral-600 text-sm line-clamp-3"
            style={{ transform: 'translateZ(30px)' }}
          >
            {video.description}
          </motion.p>

          {/* Interactive hover effects */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 flex items-center space-x-4 text-xs text-neutral-500"
                style={{ transform: 'translateZ(40px)' }}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  Click to view
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                  </svg>
                  Full screen
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0"
        >
          {/* Category filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }
                `}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* View mode toggles */}
          <div className="flex items-center space-x-2 bg-white rounded-lg border border-neutral-200 p-1">
            {[
              { mode: 'masonry', icon: '⊞', label: 'Masonry' },
              { mode: 'grid', icon: '⊟', label: 'Grid' },
              { mode: 'list', icon: '☰', label: 'List' }
            ].map((mode) => (
              <button
                key={mode.mode}
                onClick={() => setViewMode(mode.mode as any)}
                className={`
                  px-3 py-2 rounded-md text-sm transition-all duration-200
                  ${viewMode === mode.mode
                    ? 'bg-accent-500 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                  }
                `}
                title={mode.label}
              >
                {mode.icon}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Video grid */}
        <motion.div
          ref={galleryRef}
          onMouseMove={handleMouseMove}
          className={`
            gap-6
            ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ''}
            ${viewMode === 'masonry' ? 'columns-1 md:columns-2 lg:columns-3 space-y-6' : ''}
            ${viewMode === 'list' ? 'space-y-6' : ''}
          `}
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''}
              >
                <VideoCard video={video} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results state */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-neutral-700 mb-2">No videos found</h3>
            <p className="text-neutral-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              
              {/* Embed YouTube video */}
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&controls=1&showinfo=0&rel=0`}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; encrypted-media"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
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
      `}</style>
    </section>
  );
};

export default VideoGallery; 