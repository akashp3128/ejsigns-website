import { useState, useCallback, useRef, useEffect } from 'react';

export interface VideoState {
  isPlaying: boolean;
  progress: number;
  volume: number;
  isFullscreen: boolean;
  quality: string;
  isPictureInPicture: boolean;
  loadingState: 'idle' | 'loading' | 'loaded' | 'error';
  currentTime: number;
  duration: number;
  playbackRate: number;
  isBuffering: boolean;
  hasStarted: boolean;
  watchTime: number;
}

export interface VideoAnalytics {
  totalWatchTime: number;
  playCount: number;
  pauseCount: number;
  seekCount: number;
  qualityChanges: number;
  engagementRate: number;
  completionRate: number;
}

// Advanced video player hook
export const useVideoPlayer = (videoId: string) => {
  const [videoState, setVideoState] = useState<VideoState>({
    isPlaying: false,
    progress: 0,
    volume: 80,
    isFullscreen: false,
    quality: 'auto',
    isPictureInPicture: false,
    loadingState: 'idle',
    currentTime: 0,
    duration: 0,
    playbackRate: 1,
    isBuffering: false,
    hasStarted: false,
    watchTime: 0
  });

  const [analytics, setAnalytics] = useState<VideoAnalytics>({
    totalWatchTime: 0,
    playCount: 0,
    pauseCount: 0,
    seekCount: 0,
    qualityChanges: 0,
    engagementRate: 0,
    completionRate: 0
  });

  const videoRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);
  const lastPositionRef = useRef<number>(0);

  // Track video engagement
  const trackPlay = useCallback(() => {
    startTimeRef.current = Date.now();
    setVideoState(prev => ({ ...prev, isPlaying: true, hasStarted: true }));
    setAnalytics(prev => ({ ...prev, playCount: prev.playCount + 1 }));
  }, []);

  const trackPause = useCallback(() => {
    if (startTimeRef.current) {
      const sessionTime = Date.now() - startTimeRef.current;
      setAnalytics(prev => ({
        ...prev,
        pauseCount: prev.pauseCount + 1,
        totalWatchTime: prev.totalWatchTime + sessionTime
      }));
    }
    setVideoState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  const trackSeek = useCallback((newTime: number) => {
    setAnalytics(prev => ({ ...prev, seekCount: prev.seekCount + 1 }));
    lastPositionRef.current = newTime;
  }, []);

  const updateProgress = useCallback((currentTime: number, duration: number) => {
    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
    setVideoState(prev => ({
      ...prev,
      currentTime,
      duration,
      progress,
      watchTime: prev.watchTime + (currentTime - lastPositionRef.current)
    }));
    
    // Update engagement rate
    if (duration > 0) {
      const completionRate = (currentTime / duration) * 100;
      setAnalytics(prev => ({
        ...prev,
        completionRate: Math.max(prev.completionRate, completionRate),
        engagementRate: Math.min(100, (prev.totalWatchTime / (duration * 1000)) * 100)
      }));
    }
    
    lastPositionRef.current = currentTime;
  }, []);

  return {
    videoState,
    analytics,
    videoRef,
    actions: {
      trackPlay,
      trackPause,
      trackSeek,
      updateProgress,
      setVideoState,
      setAnalytics
    }
  };
};

// Intersection Observer hook for performance
export const useVideoIntersection = (threshold = 0.5) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
      },
      { 
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isIntersecting, intersectionRatio, elementRef };
};

// Mouse tracking hook for interactive effects
export const useMouseTracking = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 100;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 100;
    
    setMousePosition({ x, y });
  }, []);

  return { mousePosition, handleMouseMove, elementRef };
};

// Advanced video quality detection
export const useVideoQuality = () => {
  const [connection, setConnection] = useState<any>(null);
  const [recommendedQuality, setRecommendedQuality] = useState<string>('auto');

  useEffect(() => {
    // @ts-ignore - NetworkInformation API
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    setConnection(conn);

    if (conn) {
      const updateQuality = () => {
        const effectiveType = conn.effectiveType;
        switch (effectiveType) {
          case 'slow-2g':
          case '2g':
            setRecommendedQuality('small');
            break;
          case '3g':
            setRecommendedQuality('medium');
            break;
          case '4g':
            setRecommendedQuality('large');
            break;
          default:
            setRecommendedQuality('hd720');
        }
      };

      updateQuality();
      conn.addEventListener('change', updateQuality);
      
      return () => conn.removeEventListener('change', updateQuality);
    }
  }, []);

  return { connection, recommendedQuality };
};

// Keyboard navigation hook
export const useVideoKeyboardControls = (videoRef: React.RefObject<any>) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!videoRef.current) return;

      switch (event.code) {
        case 'Space':
          event.preventDefault();
          if (videoRef.current.getPlayerState() === 1) {
            videoRef.current.pauseVideo();
          } else {
            videoRef.current.playVideo();
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          const currentTime = videoRef.current.getCurrentTime();
          videoRef.current.seekTo(Math.max(0, currentTime - 10));
          break;
        case 'ArrowRight':
          event.preventDefault();
          const currentTime2 = videoRef.current.getCurrentTime();
          videoRef.current.seekTo(currentTime2 + 10);
          break;
        case 'ArrowUp':
          event.preventDefault();
          const volume = videoRef.current.getVolume();
          videoRef.current.setVolume(Math.min(100, volume + 10));
          break;
        case 'ArrowDown':
          event.preventDefault();
          const volume2 = videoRef.current.getVolume();
          videoRef.current.setVolume(Math.max(0, volume2 - 10));
          break;
        case 'KeyF':
          event.preventDefault();
          // Toggle fullscreen
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            videoRef.current.getIframe().requestFullscreen();
          }
          break;
        case 'KeyM':
          event.preventDefault();
          if (videoRef.current.isMuted()) {
            videoRef.current.unMute();
          } else {
            videoRef.current.mute();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [videoRef]);
};

export default {
  useVideoPlayer,
  useVideoIntersection,
  useMouseTracking,
  useVideoQuality,
  useVideoKeyboardControls
}; 