import { Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const message = `Dear Shweta,

On this special day, I want you to know how much you mean to me. 💖

You've been there through thick and thin, always bringing light and joy into my life. Your kindness, your laughter, and your incredible spirit make every day brighter. ✨

Thank you for being such an amazing friend, for all the memories we've created, and for simply being YOU. 🌟

Here's to another year of adventures, laughter, and unforgettable moments together! 🎉

May this year bring you endless happiness, success, and all the love you deserve. 💝

Happy Birthday! 🎂

With love and gratitude,
Kamani`;

export default function SpecialMessage() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping) {
          setIsTyping(true);
          let index = 0;
          const interval = setInterval(() => {
            if (index <= message.length) {
              setDisplayedText(message.slice(0, index));
              index++;
            } else {
              clearInterval(interval);
            }
          }, 30);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isTyping]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="text-rose-500 fill-rose-500" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              A Special Message 💌
            </h2>
          </div>
        </div>

        <div className="backdrop-blur-lg bg-white/50 rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-base md:text-lg text-gray-800 leading-relaxed">
              {displayedText}
              {isTyping && displayedText.length < message.length && (
                <span className="inline-block w-0.5 h-6 bg-purple-600 ml-1 animate-pulse"></span>
              )}
            </pre>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex gap-3">
              {['💖', '✨', '🎂', '🎉', '💝'].map((emoji, index) => (
                <span
                  key={index}
                  className="text-3xl animate-bounce"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
