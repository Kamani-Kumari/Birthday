import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Sparkles
              className="text-pink-300 opacity-40"
              size={12 + Math.random() * 20}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent animate-gradient">
            Happy Birthday 🎉
          </h1>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-purple-800 mb-8 animate-glow">
               Shwetu✨
          </h2>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-2xl md:text-3xl text-pink-600 font-medium flex items-center justify-center gap-3">
            <span>28 December</span>
            <span className="animate-bounce">🎂</span>
          </p>
        </div>

        <div
          className={`mt-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block px-8 py-4 backdrop-blur-lg bg-white/30 rounded-full border border-white/50 shadow-xl">
            <p className="text-lg text-purple-700 font-medium">
              A special day for a special person 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
