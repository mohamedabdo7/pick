"use client";
import React, { useState } from "react";

// Define types for the slide data
interface Slide {
  id: number;
  image: string;
  user: string;
  sound: string;
  duration: string;
  likes: string;
}

const AppPromoComponent: React.FC = () => {
  // State to keep track of which slide is active
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Image data for the slides
  const slides: Slide[] = [
    {
      id: 1,
      image: "/images/slide1.png",
      user: "@user1",
      sound: "Original Sound",
      duration: "00:08",
      likes: "12k",
    },
    {
      id: 2,
      image: "/images/slide2.png",
      user: "@user2",
      sound: "Trending Beat",
      duration: "00:15",
      likes: "24k",
    },
    {
      id: 3,
      image: "/images/slide3.png",
      user: "@user3",
      sound: "Popular Audio",
      duration: "00:10",
      likes: "8.5k",
    },
  ];

  // Handle navigation
  const prevSlide = (): void => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (): void => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Get next slides for secondary positions
  const getNextSlideIndex = (current: number): number =>
    current === slides.length - 1 ? 0 : current + 1;

  const getNextNextSlideIndex = (current: number): number => {
    const next = getNextSlideIndex(current);
    return getNextSlideIndex(next);
  };

  return (
    <div className="relative w-full h-screen px-20 mx-auto rounded-lg overflow-hidden flex flex-col justify-center">
      {/* Top-right shadow decoration */}
      <div className="absolute top-0 right-0 w-16 h-64 bg-gradient-to-bl from-gray-300 to-transparent opacity-30"></div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row p-6 md:p-12 items-center gap-8 relative z-10 h-full">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Watch.
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Record.
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Earn.
            </h1>
          </div>

          <p className="text-slate-600">
            Download Pick and see what all the fun is about.
          </p>

          <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-medium rounded-full px-6 py-3 h-12">
            Download Now
          </button>
        </div>

        {/* Right side - App Screenshots */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="flex space-x-2">
            {/* Main active slide */}
            <div className="w-48 md:w-56 rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative h-96 md:h-[70vh]">
                <img
                  src={slides[activeSlide].image}
                  alt={`App screenshot ${activeSlide + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-40">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden relative">
                      <img
                        src="/api/placeholder/50/50"
                        alt="profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-xs">
                      <p>{slides[activeSlide].user}</p>
                      <p className="text-xs opacity-70">
                        {slides[activeSlide].sound}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs">
                      {slides[activeSlide].duration}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">
                        {slides[activeSlide].likes}
                      </span>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next slide in queue - first secondary position */}
            <div className="w-20 md:w-24 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="h-96 md:h-[70vh]">
                <img
                  src={slides[getNextSlideIndex(activeSlide)].image}
                  alt={`Next app screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Next next slide in queue - second secondary position */}
            <div className="w-20 md:w-24 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="h-96 md:h-[70vh]">
                <img
                  src={slides[getNextNextSlideIndex(activeSlide)].image}
                  alt={`Following app screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-left shadow decoration */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-300 to-transparent opacity-30"></div>

      {/* Navigation buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        <button
          onClick={prevSlide}
          className="w-8 h-8 rounded-full bg-emerald-400 border-none flex items-center justify-center"
          aria-label="Previous slide"
        >
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 rounded-full bg-emerald-400 border-none flex items-center justify-center"
          aria-label="Next slide"
        >
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppPromoComponent;
