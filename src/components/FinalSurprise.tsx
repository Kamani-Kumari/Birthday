import { Gift } from 'lucide-react';
import { useState } from 'react';

interface Confetti {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
}

export default function FinalSurprise() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  const emojis = ['🎉', '🎊', '✨', '💖', '🎂', '💝', '🌟', '💫', '🎈', '🎁'];

  const handleClick = () => {
    setShowSurprise(true);

    const newConfetti: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));

    setConfetti(newConfetti);

    setTimeout(() => {
      setConfetti([]);
    }, 5000);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
      {confetti.map((conf) => (
        <div
          key={conf.id}
          className="absolute text-3xl animate-confetti pointer-events-none"
          style={{
            left: `${conf.left}%`,
            animationDelay: `${conf.delay}s`,
            animationDuration: `${conf.duration}s`,
          }}
        >
          {conf.emoji}
        </div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!showSurprise ? (
          <div className="space-y-8">
            <Gift className="mx-auto text-purple-500 animate-bounce" size={80} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              One Last Surprise ✨
            </h2>
            <button
              onClick={handleClick}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Click Me! 🎁
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="text-7xl md:text-9xl animate-scale-in">
              🎉
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
              Thank you for being part of my life 💖
            </h2>
            <div className="backdrop-blur-lg bg-white/50 rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12 animate-slide-up-delay">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                You're not just a friend, you're family. 💝
              </p>
              <p className="text-lg md:text-xl text-purple-700 mt-6 font-medium">
                Here's to many more years of laughter, adventures, and unforgettable memories together! 🌟
              </p>
              <div className="mt-8 flex justify-center gap-4">
                {['💖', '✨', '🎂', '🎉', '💝', '🌸'].map((emoji, index) => (
                  <span
                    key={index}
                    className="text-4xl animate-bounce"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
