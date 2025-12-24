import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import ChatMemory from './components/ChatMemory';
import PhotoGallery from './components/PhotoGallery';
import SpecialMessage from './components/SpecialMessage';
import MusicPlayer from './components/MusicPlayer';
import FinalSurprise from './components/FinalSurprise';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      <HeroSection />
      <ChatMemory />
      <PhotoGallery />
      <SpecialMessage />
      <FinalSurprise />
      <MusicPlayer />
    </div>
  );
}

export default App;
