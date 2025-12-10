import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

import CoverSlide from './components/slides/CoverSlide';
import CoreConceptSlide from './components/slides/CoreConceptSlide';
import Phase1Slide from './components/slides/Phase1Slide';
import Phase2Slide from './components/slides/Phase2Slide';
import Phase3Slide from './components/slides/Phase3Slide';

const TOTAL_SLIDES = 5;

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <CoverSlide />;
      case 1: return <CoreConceptSlide />;
      case 2: return <Phase1Slide />;
      case 3: return <Phase2Slide />;
      case 4: return <Phase3Slide />;
      default: return <CoverSlide />;
    }
  };

  return (
    <div className="w-screen h-screen bg-[#0f172a] text-white overflow-hidden relative font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Slide Container */}
      <div className="relative w-full h-full z-10 flex flex-col">
        <AnimatePresence mode='wait'>
          <div key={currentSlide} className="w-full h-full">
            {renderSlide()}
          </div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls (Floating) */}
      <div className="absolute bottom-8 right-8 z-50 flex items-center gap-4">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <span className="font-mono text-sm text-gray-400 w-12 text-center select-none">
          {currentSlide + 1} / {TOTAL_SLIDES}
        </span>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gray-800 w-full z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
        />
      </div>

    </div>
  );
};

export default App;