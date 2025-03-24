"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProductVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Single video URL
  const videoUrl =
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

  // Effect to play video on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Video play error:", error);
          });
        }
      }
    }, 500); // Short delay to ensure the DOM is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#121212] min-h-screen w-full py-8 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
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
      <div className="container mx-auto relative z-10 w-full max-w-6xl flex flex-col items-center">
        {/* Video Container - Direct video UI similar to the screenshot */}
        <div
          ref={videoContainerRef}
          className="relative w-[300px] h-[500px] rounded-3xl overflow-hidden mt-16"
          style={{
            filter: "drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.5))",
          }}
        >
          {/* Video content */}
          <div className="relative w-full h-full">
            {/* Video */}
            <video
              ref={videoRef}
              src={videoUrl}
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />

            {/* Status bar */}
            <div className="absolute top-0 left-0 w-full px-3 py-1 flex justify-between items-center bg-black/50 z-30">
              <div className="text-white text-xs font-semibold pl-1">4:41</div>
              <div className="flex items-center space-x-2 pr-1">
                <svg
                  className="w-3 h-3 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" fillOpacity="0.6" />
                </svg>
                <div className="flex space-x-0.5">
                  <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                  <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                  <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                  <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
                </div>
                <svg
                  className="w-3 h-3 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8v8H8V8h8m0-2H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                  <path d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                </svg>
              </div>
            </div>

            {/* TikTok-style action buttons positioned in middle of right side - Using the exact icons from hero */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 sm:space-y-5">
              {/* Profile icon with dyson */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden text-center transition-transform duration-200 group-hover:scale-110">
                  <span className="text-[6px] sm:text-[8px] font-bold text-white">
                    dyson
                  </span>
                </div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full flex items-center justify-center text-white text-[6px] absolute right-0 bottom-0 border border-black transition-colors duration-200 group-hover:bg-emerald-300">
                  +
                </div>
              </div>

              {/* Play icon */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-200 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white text-[10px] sm:text-xs group-hover:text-emerald-300 transition-colors duration-200">
                  1.2K
                </span>
              </div>

              {/* Thumbs up icon */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
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
                <span className="text-white text-[10px] sm:text-xs group-hover:text-emerald-300 transition-colors duration-200">
                  12
                </span>
              </div>

              {/* Forward/share icon */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
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
                <span className="text-white text-[10px] sm:text-xs group-hover:text-emerald-300 transition-colors duration-200">
                  2
                </span>
              </div>

              {/* More options (three dots) */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-1 rounded-full transition-colors duration-200 group-hover:bg-black/20">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-200 group-hover:scale-110 group-hover:text-emerald-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom product info with gradient background */}
            <div className="absolute bottom-[7px] left-0 w-full p-2 sm:p-[14px] bg-gradient-to-t from-black/70 to-transparent">
              {/* Hashtags */}
              <div className="mb-1 sm:mb-2">
                <p className="text-white text-[8px] sm:text-[10px]">
                  #Tags #Tags
                </p>
              </div>

              {/* User profile and CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white overflow-hidden border border-gray-200">
                    {/* Product avatar with shopping bag icon */}
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
                  <div className="ml-1 sm:ml-2">
                    <p className="text-white text-[10px] sm:text-xs font-bold">
                      30 SAR
                    </p>
                    <p className="text-white/80 text-[8px] sm:text-[10px]">
                      Product Name
                    </p>
                  </div>
                </div>

                {/* Add to cart button */}
                <button className="bg-teal-400 text-white text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  Add to Cart
                </button>
              </div>

              {/* Media controls */}
              <div className="flex justify-end mt-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </div>
            </div>

            {/* Video progress indicator */}
            <div className="absolute bottom-4 left-0 w-full px-4 flex items-center justify-between">
              <div className="text-white text-xs">00:08</div>
              <div className="mx-2 flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-white rounded-full" />
              </div>
              <div className="text-white text-xs">00:19</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
