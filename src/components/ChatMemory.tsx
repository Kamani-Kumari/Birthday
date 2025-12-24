import { MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Message {
  text: string;
  time: string;
  sent: boolean;
}

const messages: Message[] = [
  { text: "Hii! 👋", time: "10:07 AM", sent: false },
   { text: "Are you taking admission in Allahabad! 👋", time: "10:07AM", sent: false },

  { text: "Hn bro", time: "10:34 AM", sent: true },
  { text: "Agar surathkal milega to waha phir warna allahabad hi", time: "10:34 AM", sent: true },
   { text: "Tumhe bhi wahi mil rha kya", time: "10:35 AM", sent: true },


    { text: "Are you Shweta Singh", time: "10:44 AM", sent: false },
   { text: "Right", time: "10:44AM", sent: false },

  { text: "hn hn", time: "10:45 AM", sent: true },
];

export default function ChatMemory() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          messages.forEach((_, index) => {
            setTimeout(() => {
              setVisibleMessages((prev) => [...prev, index]);
            }, index * 500);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageCircle className="text-purple-500" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our First Chat 💬
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Where it all began...
          </p>
        </div>

        <div className="backdrop-blur-lg bg-white/40 rounded-3xl shadow-2xl border border-white/50 p-6 md:p-8 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-3 rounded-t-2xl -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6">
            <p className="font-semibold text-center">First Conversation ✨</p>
          </div>

          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sent ? 'justify-end' : 'justify-start'} transform transition-all duration-500 ${
                  visibleMessages.includes(index)
                    ? 'translate-x-0 opacity-100'
                    : message.sent
                    ? 'translate-x-10 opacity-0'
                    : '-translate-x-10 opacity-0'
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                    message.sent
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sent ? 'text-pink-100' : 'text-gray-500'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-purple-600 font-medium italic">
              "And that's how our beautiful friendship started..." 💝
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
