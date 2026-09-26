import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import fareVideo from "../assets/FARE_Video.mp4";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc = fareVideo,
  title = "How It Works",
}: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCenterFeedback, setShowCenterFeedback] = useState<"play" | "pause" | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const fullscreenWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
      }
    }, 2800);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsPlaying(true);
      setShowControls(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          resetControlsTimeout();
        }).catch(() => {
          setIsPlaying(false);
        });
      }
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.currentTime = 0;
        backgroundVideoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = "unset";
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.pause();
      }
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isOpen, resetControlsTimeout]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape" && !document.fullscreenElement) {
        onClose();
      } else if (e.key === " " || e.key === "k") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "m") {
        e.preventDefault();
        toggleMute();
      } else if (e.key === "f") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      if (backgroundVideoRef.current) backgroundVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
      setShowCenterFeedback("play");
      resetControlsTimeout();
    } else {
      videoRef.current.pause();
      if (backgroundVideoRef.current) backgroundVideoRef.current.pause();
      setIsPlaying(false);
      setShowCenterFeedback("pause");
      setShowControls(true);
    }
    setTimeout(() => setShowCenterFeedback(null), 600);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    resetControlsTimeout();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / total) * 100);

    // Keep ambient background synced
    if (backgroundVideoRef.current && Math.abs(backgroundVideoRef.current.currentTime - current) > 0.3) {
      backgroundVideoRef.current.currentTime = current;
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const seekTime = Math.max(0, Math.min(1, clickPosition)) * (videoRef.current.duration || 0);
    videoRef.current.currentTime = seekTime;
    if (backgroundVideoRef.current) backgroundVideoRef.current.currentTime = seekTime;
    setProgress(clickPosition * 100);
    resetControlsTimeout();
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    if (backgroundVideoRef.current) backgroundVideoRef.current.currentTime = 0;
    videoRef.current.play();
    if (backgroundVideoRef.current) backgroundVideoRef.current.play().catch(() => {});
    setIsPlaying(true);
    resetControlsTimeout();
  };

  const toggleFullscreen = () => {
    if (!fullscreenWrapperRef.current) return;
    if (!document.fullscreenElement) {
      fullscreenWrapperRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={fullscreenWrapperRef}
          className={`fixed inset-0 z-[99999] flex items-center justify-center font-['Outfit'] select-none bg-[#040C1E] ${
            isFullscreen ? "p-0" : "p-3 sm:p-5 md:p-6"
          }`}
        >
          {/* Backdrop blur (when not in fullscreen) */}
          {!isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#040C1E]/90 backdrop-blur-xl"
              onClick={onClose}
            />
          )}

          {/* Ambient Video Background / Glow (YouTube Shorts Style) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <video
              ref={backgroundVideoRef}
              src={videoSrc}
              muted
              playsInline
              loop
              className="w-full h-full object-cover scale-150 blur-3xl opacity-20 brightness-75"
            />
            <div className="absolute inset-0 bg-[#040C1E]/60 backdrop-blur-2xl" />
          </div>

          {/* 9:16 Short Form Player Frame (Strictly 9:16 in both Normal & Fullscreen Mode) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 320,
              duration: 0.45,
            }}
            onMouseMove={resetControlsTimeout}
            onTouchStart={resetControlsTimeout}
            className={`relative z-10 aspect-[9/16] bg-black rounded-[4px] shadow-[0_25px_90px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.12)] overflow-hidden flex flex-col items-center justify-center group border border-white/15 ${
              isFullscreen
                ? "h-full max-h-screen w-auto max-w-[100vw] my-auto"
                : "w-full max-w-[380px] sm:max-w-[400px] md:max-w-[420px] max-h-[88vh]"
            }`}
          >
            {/* Native Video Element */}
            <video
              ref={videoRef}
              src={videoSrc}
              playsInline
              loop
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer rounded-[4px]"
            />

            {/* Tap/Click Feedback Animation */}
            <AnimatePresence>
              {showCenterFeedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.15 }}
                  exit={{ opacity: 0, scale: 1.4 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-[4px] bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white pointer-events-none shadow-2xl z-30"
                >
                  {showCenterFeedback === "play" ? (
                    <Play size={28} className="text-[#E2C068] fill-[#E2C068] ml-0.5" />
                  ) : (
                    <Pause size={28} className="text-white fill-white" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Top Bar (Header & Close) */}
            <div
              className={`absolute top-0 inset-x-0 p-3 sm:p-4 pt-3 flex items-center justify-between z-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                showControls ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <Sparkles size={13} className="text-[#E2C068]" />
                <span className="text-[11.5px] font-bold text-white tracking-wide">
                  {title}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {isFullscreen && (
                  <button
                    onClick={toggleFullscreen}
                    aria-label="Exit Fullscreen"
                    title="Exit Fullscreen (F)"
                    className="w-8 h-8 flex items-center justify-center rounded-[4px] bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 shadow-md cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Minimize size={16} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close video"
                  title="Close (Esc)"
                  className="w-8 h-8 flex items-center justify-center rounded-[4px] bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 shadow-md cursor-pointer hover:scale-105 active:scale-95"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Center Play Button Overlay (when paused) */}
            <AnimatePresence>
              {!isPlaying && !showCenterFeedback && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={togglePlay}
                  aria-label="Play video"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-[4px] bg-[#0B1D3A]/85 hover:bg-[#0B1D3A] text-white backdrop-blur-md border border-[#E2C068]/40 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-30 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                >
                  <Play size={26} className="text-[#E2C068] fill-[#E2C068] ml-0.5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Bottom Controls Overlay */}
            <div
              className={`absolute bottom-0 inset-x-0 p-3 sm:p-4 pt-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-2.5 z-40 transition-opacity duration-300 ${
                showControls ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Scrubbable Timeline */}
              <div
                ref={progressBarRef}
                onClick={handleSeek}
                className="w-full py-1 cursor-pointer group/bar flex items-center"
              >
                <div className="w-full h-1 group-hover/bar:h-2 bg-white/25 rounded-[2px] overflow-hidden relative transition-all duration-200">
                  {/* Progress Fill */}
                  <div
                    className="h-full bg-gradient-to-r from-[#C99A2E] via-[#F3D37F] to-[#E2C068] rounded-[2px] relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-[2px] bg-white shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>

              {/* Bottom Row Actions */}
              <div className="flex items-center justify-between text-white text-[13px]">
                {/* Left Controls: Play + Time */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/15 text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-white" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    aria-label="Restart video"
                    title="Restart"
                    className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw size={14} />
                  </button>

                  <span className="text-[11px] font-mono font-medium text-white/75 ml-1">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Right Controls: Volume + Fullscreen */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/15 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX size={16} className="text-red-400" /> : <Volume2 size={16} />}
                  </button>

                  <button
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
                    className="w-7 h-7 flex items-center justify-center rounded-[4px] hover:bg-white/15 text-white transition-colors cursor-pointer"
                  >
                    {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
