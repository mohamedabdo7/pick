"use client";
// components/sections/Hero.tsx
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const phoneFrameRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Using reliable video URLs from trusted sources - add more videos for TikTok-style scrolling
  const videos = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  ];

  // Create refs for each video element with proper typing
  const videoRefs = useRef<React.RefObject<HTMLVideoElement>[]>(
    videos.map(() => React.createRef<any>())
  );

  // Function to control video playback
  const playCurrentVideo = (index: number) => {
    // Pause all videos first
    videoRefs.current.forEach((ref, i) => {
      if (ref.current) {
        if (i === index) {
          // Play the current video
          const playPromise = ref.current.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.error("Video play error:", error);
            });
          }
        } else {
          // Pause all other videos
          ref.current.pause();
        }
      }
    });
  };

  // Function to handle snap scrolling behavior
  const handleScroll = () => {
    if (!scrollAreaRef.current) return;

    const container = scrollAreaRef.current;
    const scrollTop = container.scrollTop;
    const itemHeight = container.clientHeight;

    // Calculate which video should be visible based on scroll position
    const index = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(index, videos.length - 1));

    if (clampedIndex !== currentVideoIndex) {
      setCurrentVideoIndex(clampedIndex);
    }
  };

  // Effect to handle video playback and scroll position when index changes
  useEffect(() => {
    // Play the current video and pause others
    playCurrentVideo(currentVideoIndex);

    // Scroll to the current video
    if (scrollAreaRef.current) {
      const container = scrollAreaRef.current;
      const targetScrollTop = currentVideoIndex * container.clientHeight;

      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    }
  }, [currentVideoIndex]);

  // Set up a MutationObserver to detect when videos become visible
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      const options = {
        root: scrollAreaRef.current,
        threshold: 0.7, // 70% visibility triggers the callback
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          if (entry.isIntersecting && index !== currentVideoIndex) {
            setCurrentVideoIndex(index);
          }
        });
      }, options);

      // Observe all video containers
      const videoContainers = document.querySelectorAll(".video-slide");
      videoContainers.forEach((container) => {
        observer.observe(container);
      });

      return () => {
        videoContainers.forEach((container) => {
          observer.unobserve(container);
        });
      };
    }
  }, [currentVideoIndex]);

  // Initial play for the first video
  useEffect(() => {
    const timer = setTimeout(() => {
      playCurrentVideo(0);
    }, 500); // Short delay to ensure the DOM is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#121212] min-h-screen py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* Main content container */}
      <div className="container mx-auto flex flex-col lg:flex-row mt-12 items-center justify-between relative z-10">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 pr-4">
          <div className="relative">
            {/* Icon elements */}
            <div className="absolute -top-4 left-5">
              <Image
                src="/icons/cam.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </div>
            <div className="absolute top-8 right-16">
              <Image
                src="/icons/dollar-emoji.svg"
                alt=""
                width={30}
                height={30}
                aria-hidden="true"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Watch,</span>
              <span className="relative inline-block">
                Create, <span className="text-emerald-400">Earn</span>
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl text-white font-medium mt-2">
              Monetize your creativity
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg mt-4 max-w-lg">
              Welcome to the Pick Side! Where social meets shopping, and trust
              takes center stage. Pick isn't just an app - it's a
              community-powered platform where creativity thrives and trust
              fuels every interaction.
            </p>

            {/* Call to action */}
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                Download Pick
                <br />
                and see what all the fun is about.
              </h3>

              <Button className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-6 py-2 h-10">
                Download Now
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - TikTok-style Phone with Videos */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div ref={phoneFrameRef} className="relative w-[300px] h-[600px]">
            {/* Phone Screen (with TikTok-style scrolling videos) */}
            <div
              className="absolute top-[2%] left-[5%] w-[90%] h-[95%] z-10 overflow-hidden"
              style={{
                borderRadius: "30px",
                background: "linear-gradient(145deg, #1a2e35 0%, #0d472e 100%)",
              }}
            >
              {/* Scrollable container for videos */}
              <div
                ref={scrollAreaRef}
                className="absolute top-0 left-0 w-full h-full overflow-y-auto snap-y snap-mandatory"
                onScroll={handleScroll}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* Hide scrollbar for Chrome/Safari/Opera */}
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {/* TikTok-style video slides */}
                {videos.map((src, index) => (
                  <div
                    key={index}
                    data-index={index.toString()}
                    className="video-slide relative w-full h-full snap-start snap-always"
                  >
                    {/* Video container */}
                    <div className="absolute inset-0 w-full h-full">
                      <video
                        ref={videoRefs.current[index]}
                        src={src}
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />

                      {/* Status bar */}
                      <div className="absolute top-0 left-0 w-full p-1 flex justify-between items-center bg-transparent z-30">
                        <div className="text-white text-xs font-medium">
                          9:41
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                            <path d="M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
                          </svg>
                          <div className="flex space-x-px">
                            <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                            <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                            <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                            <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                          </div>
                          <svg
                            className="w-4 h-4 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z" />
                          </svg>
                        </div>
                      </div>

                      {/* Top navigation */}
                      <div className="absolute top-7 left-0 w-full px-3 py-2 flex justify-between items-center bg-transparent z-20">
                        <div className="flex space-x-4">
                          <span className="text-white text-sm font-medium">
                            Following
                          </span>
                          <span className="text-white text-sm font-bold border-b-2 border-white pb-0.5">
                            For you
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-5 h-5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>

                      {/* TikTok-style action buttons positioned in middle of right side */}
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-5">
                        {/* Profile icon with dyson */}
                        <div className="flex flex-col items-center group cursor-pointer">
                          <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden text-center transition-transform duration-200 group-hover:scale-110">
                            <span className="text-[8px] font-bold text-white">
                              dyson
                            </span>
                          </div>
                          <div className="w-3 h-3 bg-teal-400 rounded-full flex items-center justify-center text-white text-[6px] absolute right-0 bottom-0 border border-black transition-colors duration-200 group-hover:bg-emerald-300">
                            +
                          </div>
                        </div>

                        {/* Play icon */}
                        <div className="flex flex-col items-center group cursor-pointer">
                          <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                            <svg
                              className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <span className="text-white text-xs group-hover:text-emerald-300 transition-colors duration-200">
                            1.2K
                          </span>
                        </div>

                        {/* Thumbs up icon */}
                        <div className="flex flex-col items-center group cursor-pointer">
                          <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                          </div>
                          <span className="text-white text-xs group-hover:text-emerald-300 transition-colors duration-200">
                            12
                          </span>
                        </div>

                        {/* Forward/share icon */}
                        <div className="flex flex-col items-center group cursor-pointer">
                          <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="15 17 20 12 15 7" />
                              <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
                            </svg>
                          </div>
                          <span className="text-white text-xs group-hover:text-emerald-300 transition-colors duration-200">
                            2
                          </span>
                        </div>

                        {/* More options (three dots) */}
                        <div className="flex flex-col items-center group cursor-pointer">
                          <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                            <svg
                              className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Bottom product info */}
                      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
                        {/* Hashtags */}
                        <div className="mb-2">
                          <p className="text-white text-[10px]">#Tags #Tags</p>
                        </div>

                        {/* User profile and CTA */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-gray-200">
                              {/* Real product avatar instead of placeholder */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#10b981"
                                className="p-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="ml-2">
                              <p className="text-white text-xs font-bold">
                                30 SAR
                              </p>
                              <p className="text-white/80 text-[10px]">
                                Product Name
                              </p>
                            </div>
                          </div>

                          <button className="bg-teal-400 text-white text-[10px] px-2 py-1 rounded-full">
                            Add to Cart
                          </button>
                        </div>

                        {/* Media controls */}
                        <div className="flex justify-end mt-1">
                          <svg
                            className="w-4 h-4 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom navigation */}
                      <div className="absolute -bottom-12 left-0 w-full flex justify-around items-center bg-black py-1.5">
                        <div className="flex flex-col items-center">
                          <svg
                            className="w-5 h-5 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                          </svg>
                          <span className="text-white text-[8px] mt-0.5">
                            Home
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <svg
                            className="w-5 h-5 text-white/60"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                          <span className="text-white/60 text-[8px] mt-0.5">
                            Shop
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <svg
                            className="w-5 h-5 text-white/60"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          <span className="text-white/60 text-[8px] mt-0.5">
                            Create
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <svg
                            className="w-5 h-5 text-white/60"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                          </svg>
                          <span className="text-white/60 text-[8px] mt-0.5">
                            Cart
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <svg
                            className="w-5 h-5 text-white/60"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                          <span className="text-white/60 text-[8px] mt-0.5">
                            Profile
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Frame Overlay - using existing mockup image */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <Image
                src="/images/phone-mockup.png"
                alt="Mobile phone frame"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// // components/sections/Hero.tsx
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function HeroSection() {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const phoneFrameRef = useRef(null);
//   const scrollAreaRef = useRef(null);

//   // Using reliable video URLs from trusted sources - add more videos for TikTok-style scrolling
//   const videos = [
//     "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//     "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//   ];

//   // Create refs for each video element
//   const videoRefs = useRef(videos.map(() => React.createRef()));

//   // Function to control video playback
//   const playCurrentVideo = (index) => {
//     // Pause all videos first
//     videoRefs.current.forEach((ref, i) => {
//       if (ref.current) {
//         if (i === index) {
//           // Play the current video
//           const playPromise = ref.current.play();
//           if (playPromise !== undefined) {
//             playPromise.catch((error) => {
//               console.error("Video play error:", error);
//             });
//           }
//         } else {
//           // Pause all other videos
//           ref.current.pause();
//         }
//       }
//     });
//   };

//   // Function to handle snap scrolling behavior
//   const handleScroll = () => {
//     if (!scrollAreaRef.current) return;

//     const container = scrollAreaRef.current;
//     const scrollTop = container.scrollTop;
//     const itemHeight = container.clientHeight;

//     // Calculate which video should be visible based on scroll position
//     const index = Math.round(scrollTop / itemHeight);
//     const clampedIndex = Math.max(0, Math.min(index, videos.length - 1));

//     if (clampedIndex !== currentVideoIndex) {
//       setCurrentVideoIndex(clampedIndex);
//     }
//   };

//   // Effect to handle video playback and scroll position when index changes
//   useEffect(() => {
//     // Play the current video and pause others
//     playCurrentVideo(currentVideoIndex);

//     // Scroll to the current video
//     if (scrollAreaRef.current) {
//       const container = scrollAreaRef.current;
//       const targetScrollTop = currentVideoIndex * container.clientHeight;

//       container.scrollTo({
//         top: targetScrollTop,
//         behavior: "smooth",
//       });
//     }
//   }, [currentVideoIndex]);

//   // Set up a MutationObserver to detect when videos become visible
//   useEffect(() => {
//     if (typeof IntersectionObserver !== "undefined") {
//       const options = {
//         root: scrollAreaRef.current,
//         threshold: 0.7, // 70% visibility triggers the callback
//       };

//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           const index = parseInt(entry.target.dataset.index, 10);
//           if (entry.isIntersecting && index !== currentVideoIndex) {
//             setCurrentVideoIndex(index);
//           }
//         });
//       }, options);

//       // Observe all video containers
//       const videoContainers = document.querySelectorAll(".video-slide");
//       videoContainers.forEach((container) => {
//         observer.observe(container);
//       });

//       return () => {
//         videoContainers.forEach((container) => {
//           observer.unobserve(container);
//         });
//       };
//     }
//   }, [currentVideoIndex]);

//   // Initial play for the first video
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       playCurrentVideo(0);
//     }, 500); // Short delay to ensure the DOM is ready

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative bg-[#121212] min-h-screen py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/hero-bg.png"
//           alt=""
//           fill
//           priority
//           className="object-cover object-center"
//           aria-hidden="true"
//         />
//       </div>

//       {/* Main content container */}
//       <div className="container mx-auto flex flex-col lg:flex-row mt-12 items-center justify-between relative z-10">
//         {/* Left Column - Text Content */}
//         <div className="lg:w-1/2 mb-8 lg:mb-0 pr-4">
//           <div className="relative">
//             {/* Icon elements */}
//             <div className="absolute -top-4 left-5">
//               <Image
//                 src="/icons/cam.svg"
//                 alt=""
//                 width={24}
//                 height={24}
//                 aria-hidden="true"
//               />
//             </div>
//             <div className="absolute top-8 right-16">
//               <Image
//                 src="/icons/dollar-emoji.svg"
//                 alt=""
//                 width={30}
//                 height={30}
//                 aria-hidden="true"
//               />
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//               <span className="block">Watch,</span>
//               <span className="relative inline-block">
//                 Create, <span className="text-emerald-400">Earn</span>
//               </span>
//             </h1>

//             {/* Subheading */}
//             <h2 className="text-xl md:text-2xl text-white font-medium mt-2">
//               Monetize your creativity
//             </h2>

//             {/* Description */}
//             <p className="text-gray-300 text-base md:text-lg mt-4 max-w-lg">
//               Welcome to the Pick Side! Where social meets shopping, and trust
//               takes center stage. Pick isn't just an app - it's a
//               community-powered platform where creativity thrives and trust
//               fuels every interaction.
//             </p>

//             {/* Call to action */}
//             <div className="mt-6">
//               <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
//                 Download Pick
//                 <br />
//                 and see what all the fun is about.
//               </h3>

//               <Button className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-6 py-2 h-10">
//                 Download Now
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - TikTok-style Phone with Videos */}
//         <div className="lg:w-1/2 flex justify-center items-center">
//           <div ref={phoneFrameRef} className="relative w-[300px] h-[600px]">
//             {/* Phone Screen (with TikTok-style scrolling videos) */}
//             <div
//               className="absolute top-[2%] left-[5%] w-[90%] h-[95%] z-10 overflow-hidden"
//               style={{
//                 borderRadius: "30px",
//                 background: "linear-gradient(145deg, #1a2e35 0%, #0d472e 100%)",
//               }}
//             >
//               {/* Scrollable container for videos */}
//               <div
//                 ref={scrollAreaRef}
//                 className="absolute top-0 left-0 w-full h-full overflow-y-auto snap-y snap-mandatory"
//                 onScroll={handleScroll}
//                 style={{
//                   scrollbarWidth: "none",
//                   msOverflowStyle: "none",
//                 }}
//               >
//                 {/* Hide scrollbar for Chrome/Safari/Opera */}
//                 <style jsx>{`
//                   div::-webkit-scrollbar {
//                     display: none;
//                   }
//                 `}</style>

//                 {/* TikTok-style video slides */}
//                 {videos.map((src, index) => (
//                   <div
//                     key={index}
//                     data-index={index}
//                     className="video-slide relative w-full h-full snap-start snap-always"
//                   >
//                     {/* Video container */}
//                     <div className="absolute inset-0 w-full h-full">
//                       <video
//                         ref={videoRefs.current[index]}
//                         src={src}
//                         loop
//                         muted
//                         playsInline
//                         preload="auto"
//                         className="w-full h-full object-cover"
//                       />

//                       {/* Status bar */}
//                       <div className="absolute top-0 left-0 w-full p-1 flex justify-between items-center bg-transparent z-30">
//                         <div className="text-white text-xs font-medium">
//                           9:41
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <svg
//                             className="w-4 h-4 text-white"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
//                             <path d="M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
//                           </svg>
//                           <div className="flex space-x-px">
//                             <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
//                             <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
//                             <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
//                             <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
//                           </div>
//                           <svg
//                             className="w-4 h-4 text-white"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z" />
//                           </svg>
//                         </div>
//                       </div>

//                       {/* Top navigation */}
//                       <div className="absolute top-7 left-0 w-full px-3 py-2 flex justify-between items-center bg-transparent z-20">
//                         <div className="flex space-x-4">
//                           <span className="text-white text-sm font-medium">
//                             Following
//                           </span>
//                           <span className="text-white text-sm font-bold border-b-2 border-white pb-0.5">
//                             For you
//                           </span>
//                         </div>
//                         <div className="flex items-center space-x-3">
//                           <svg
//                             className="w-5 h-5 text-white"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                           >
//                             <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                           </svg>
//                           <svg
//                             className="w-5 h-5 text-white"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                           >
//                             <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                           </svg>
//                         </div>
//                       </div>

//                       {/* TikTok-style action buttons positioned in middle of right side */}
//                       <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-5">
//                         {/* Profile icon with dyson */}
//                         <div className="flex flex-col items-center group cursor-pointer">
//                           <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden text-center transition-transform duration-200 group-hover:scale-110">
//                             <span className="text-[8px] font-bold text-white">
//                               dyson
//                             </span>
//                           </div>
//                           <div className="w-3 h-3 bg-teal-400 rounded-full flex items-center justify-center text-white text-[6px] absolute right-0 bottom-0 border border-black transition-colors duration-200 group-hover:bg-emerald-300">
//                             +
//                           </div>
//                         </div>

//                         {/* Play icon */}
//                         <div className="flex flex-col items-center group cursor-pointer">
//                           <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
//                             <svg
//                               className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110"
//                               viewBox="0 0 24 24"
//                               fill="currentColor"
//                             >
//                               <path d="M8 5v14l11-7z" />
//                             </svg>
//                           </div>
//                           <span className="text-white text-xs group-hover:text-emerald-300 transition-colors duration-200">
//                             1.2K
//                           </span>
//                         </div>

//                         {/* Thumbs up icon */}
//                         <div className="flex flex-col items-center group cursor-pointer">
//                           <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             >
//                               <path d="M7 10v12" />
//                               <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
//                             </svg>
//                           </div>
//                           <span className="text-white text-xs group-hover:text-emerald-300 transition-colors duration-200">
//                             12
//                           </span>
//                         </div>

//                         {/* Forward/share icon */}
//                         <div className="flex flex-col items-center group cursor-pointer">
//                           <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             >
//                               <polyline points="15 17 20 12 15 7" />
//                               <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
//                             </svg>
//                           </div>
//                           <span className="text-white text-xs group-hover:text-emerald-300 transition-colors duration-200">
//                             2
//                           </span>
//                         </div>

//                         {/* More options (three dots) */}
//                         <div className="flex flex-col items-center group cursor-pointer">
//                           <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
//                             <svg
//                               className="w-7 h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
//                               viewBox="0 0 24 24"
//                               fill="currentColor"
//                             >
//                               <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Bottom product info */}
//                       <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
//                         {/* Hashtags */}
//                         <div className="mb-2">
//                           <p className="text-white text-[10px]">#Tags #Tags</p>
//                         </div>

//                         {/* User profile and CTA */}
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center">
//                             <div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-gray-200">
//                               {/* Real product avatar instead of placeholder */}
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="#10b981"
//                                 className="p-1"
//                               >
//                                 <path
//                                   fillRule="evenodd"
//                                   d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
//                                   clipRule="evenodd"
//                                 />
//                               </svg>
//                             </div>
//                             <div className="ml-2">
//                               <p className="text-white text-xs font-bold">
//                                 30 SAR
//                               </p>
//                               <p className="text-white/80 text-[10px]">
//                                 Product Name
//                               </p>
//                             </div>
//                           </div>

//                           <button className="bg-teal-400 text-white text-[10px] px-2 py-1 rounded-full">
//                             Add to Cart
//                           </button>
//                         </div>

//                         {/* Media controls */}
//                         <div className="flex justify-end mt-1">
//                           <svg
//                             className="w-4 h-4 text-white"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
//                           </svg>
//                         </div>
//                       </div>

//                       {/* Bottom navigation */}
//                       <div className="absolute -bottom-12 left-0 w-full flex justify-around items-center bg-black py-1.5">
//                         <div className="flex flex-col items-center">
//                           <svg
//                             className="w-5 h-5 text-white"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//                           </svg>
//                           <span className="text-white text-[8px] mt-0.5">
//                             Home
//                           </span>
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <svg
//                             className="w-5 h-5 text-white/60"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
//                           </svg>
//                           <span className="text-white/60 text-[8px] mt-0.5">
//                             Shop
//                           </span>
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <svg
//                             className="w-5 h-5 text-white/60"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
//                           </svg>
//                           <span className="text-white/60 text-[8px] mt-0.5">
//                             Create
//                           </span>
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <svg
//                             className="w-5 h-5 text-white/60"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
//                           </svg>
//                           <span className="text-white/60 text-[8px] mt-0.5">
//                             Cart
//                           </span>
//                         </div>
//                         <div className="flex flex-col items-center">
//                           <svg
//                             className="w-5 h-5 text-white/60"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//                           </svg>
//                           <span className="text-white/60 text-[8px] mt-0.5">
//                             Profile
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Phone Frame Overlay - using existing mockup image */}
//             <div className="absolute inset-0 z-20 pointer-events-none">
//               <Image
//                 src="/images/phone-mockup.png"
//                 alt="Mobile phone frame"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // components/sections/Hero.tsx
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function HeroSection() {
//   return (
//     <div className="relative bg-[#121212] min-h-fit py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/hero-bg.png"
//           alt=""
//           fill
//           priority
//           className="object-cover object-center"
//           aria-hidden="true"
//         />
//       </div>

//       {/* Main content container */}
//       <div className="container mx-auto flex flex-col lg:flex-row mt-12 items-center justify-between relative z-10">
//         {/* Left Column - Text Content */}
//         <div className="lg:w-1/2 mb-8 lg:mb-0 pr-4">
//           <div className="relative">
//             {/* Icon elements */}
//             <div className="absolute -top-4 left-5">
//               <Image
//                 src="/icons/cam.svg"
//                 alt=""
//                 width={24}
//                 height={24}
//                 aria-hidden="true"
//               />
//             </div>
//             <div className="absolute top-8 right-16">
//               <Image
//                 src="/icons/dollar-emoji.svg"
//                 alt=""
//                 width={30}
//                 height={30}
//                 aria-hidden="true"
//               />
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//               <span className="block">Watch,</span>
//               <span className="relative inline-block">
//                 Create, <span className="text-emerald-400">Earn</span>
//               </span>
//             </h1>

//             {/* Subheading */}
//             <h2 className="text-xl md:text-2xl text-white font-medium mt-2">
//               Monetize your creativity
//             </h2>

//             {/* Description */}
//             <p className="text-gray-300 text-base md:text-lg mt-4 max-w-lg">
//               Welcome to the Pick Side! Where social meets shopping, and trust
//               takes center stage. Pick isn't just an app - it's a
//               community-powered platform where creativity thrives and trust
//               fuels every interaction.
//             </p>

//             {/* Call to action */}
//             <div className="mt-6">
//               <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
//                 Download Pick
//                 <br />
//                 and see what all the fun is about.
//               </h3>

//               <Button className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-6 py-2 h-10">
//                 Download Now
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Phone Mockup */}
//         <div className="lg:w-1/2 flex justify-center">
//           <div className="relative">
//             <Image
//               src="/images/phone-mockup.png"
//               alt="Pick app interface on phone"
//               width={350}
//               height={700}
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
