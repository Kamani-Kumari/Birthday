import { Music, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Pause music when component unmounts
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = async () => {
      console.log("Nhi ho raha hai")
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play(); // user interaction required
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.log("Audio autoplay blocked by browser");
    }
  };

  return (
    <>
      {/* AUDIO ELEMENT */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/music/music1.mp3"
      />

      {/* FLOATING MUSIC BUTTON */}
      <div className="fixed bottom-8 right-8 z-50 group">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-purple-600 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-bounce">
            Click to play birthday music 🎵
            <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-2 h-2 bg-purple-600" />
          </div>
        )}

        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full backdrop-blur-lg
          bg-gradient-to-r from-purple-400 to-pink-400
          hover:from-purple-500 hover:to-pink-500
          shadow-xl flex items-center justify-center
          transform transition-all duration-300
          hover:scale-110 hover:rotate-12"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="text-white" size={28} fill="white" />
          ) : (
            <Play className="text-white ml-1" size={28} fill="white" />
          )}
        </button>

        {/* PULSE EFFECT */}
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-ping opacity-20 pointer-events-none" />
        {/* MUSIC ICON */}
        <div className="absolute -top-1 -right-1">
          <Music className="text-yellow-400 animate-pulse" size={20} />
        </div>
      </div>
    </>
  );
}
