import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-pink-200 via-purple-200 to-rose-200 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <Sparkles className="text-purple-500 animate-spin-slow mx-auto" size={60} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl animate-bounce">🎂</div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Preparing something special...
        </h2>

        <div className="w-64 h-3 bg-white/50 rounded-full overflow-hidden backdrop-blur-lg mx-auto">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-4 text-purple-600 font-medium">{progress}%</p>
      </div>
    </div>
  );
}
