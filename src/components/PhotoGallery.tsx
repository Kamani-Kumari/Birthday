import { Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Photo {
  url: string;
  caption: string;
}

const photos: Photo[] = [
  {
    url: "/photos/photo1.jpg",
    caption: "Our first memory together ❤️",
  },
  {
    url: "/photos/photo2.jpg",
    caption: "Smiles that mean everything 😊",
  },
  {
    url: "/photos/photo3.jpg",
    caption: "Forever moments ✨",
  },
  {
    url: "/photos/photo4.jpg",
    caption: "Captured happiness 📸",
  },
  {
    url: "/photos/photo5.jpg",
    caption: "Love in every frame 💖",
  },
  {
    url: "/photos/photo6.jpg",
    caption: "Together always 🌸",
  },
   {
    url: "/photos/photo7.jpg",
    caption: "Our first memory together ❤️",
  },
  {
    url: "/photos/photo8.jpg",
    caption: "Smiles that mean everything 😊",
  },
  {
    url: "/photos/photo9.jpg",
    caption: "Forever moments ✨",
  },
  {
    url: "/photos/photo10.jpg",
    caption: "Captured happiness 📸",
  },
  {
    url: "/photos/photo11.jpg",
    caption: "Love in every frame 💖",
  },
  {
    url: "/photos/photo12.jpg",
    caption: "Together always 🌸",
  },
   {
    url: "/photos/photo13.jpg",
    caption: "Exam Partner",
  },
  {
    url: "/photos/photo14.jpg",
    caption: "Anshu Shwetu Kammo 💖",
  },
  {
    url: "/photos/photo15.jpg",
    caption: "Random One Credit goes to Anshu 🌸",
  },

];

export default function PhotoGallery() {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          photos.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePhotos((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Camera className="text-rose-500" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Our Beautiful Memories
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Moments we’ll cherish forever 💫
          </p>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(index)}
              className={`group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer
              transition-all duration-700 ease-out
              ${
                visiblePhotos.includes(index)
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-12"
              }
              ${
                activeImage === index
                  ? "ring-4 ring-rose-400 scale-105"
                  : ""
              }
              hover:scale-105 hover:rotate-1`}
            >
              {/* IMAGE */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 float"
                />
              </div>

              {/* CAPTION OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-lg font-medium">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* HEART ICON */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/30 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl">💖</span>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-14 text-center">
         
        </div>
      </div>
    </section>
  );
}
