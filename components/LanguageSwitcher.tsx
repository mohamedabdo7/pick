"use client";
import React from "react";
import { useChangeLocale } from "../locales/client";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function LanguageSwitcher() {
  // Get the changeLocale function
  const changeLocaleFn = useChangeLocale();
  const params = useParams();
  const currentLocale = (params.locale as string) || "en";
  const isEnglish = currentLocale === "en";

  // Handle language toggle
  function toggleLanguage() {
    try {
      // Toggle between "en" and "ar"
      const newLocale = isEnglish ? "ar" : "en";
      (changeLocaleFn as Function)(newLocale);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center bg-opacity-10 bg-white p-2 rounded-full hover:bg-opacity-20 transition-colors duration-200"
      aria-label={isEnglish ? "Switch to Arabic" : "Switch to English"}
      title={isEnglish ? "العربية" : "English"}
    >
      {/* Show Saudi flag when in English mode, British flag when in Arabic mode */}
      {isEnglish ? (
        <Image
          src="/icons/arflag.svg"
          alt="العربية"
          width={24}
          height={24}
          className="rounded-full"
        />
      ) : (
        <Image
          src="/icons/enflag.svg"
          alt="English"
          width={24}
          height={24}
          className="rounded-full"
        />
      )}
    </button>
  );
}

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { useChangeLocale } from "../locales/client";
// import { useParams } from "next/navigation";

// type LocaleCode = "en" | "ar"; // Add all your supported locales here

// type Language = {
//   code: LocaleCode;
//   name: string;
//   icon: React.ReactNode;
// };

// export default function LanguageSwitcher() {
//   // Get the changeLocale function
//   const changeLocaleFn = useChangeLocale();
//   const params = useParams();
//   const currentLocale = (params.locale as string) || "en";

//   console.log("currentLocale", currentLocale);

//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Define supported languages with their icons
//   const languages: Language[] = [
//     {
//       code: "en",
//       name: "English",
//       icon: (
//         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 5v1h1V7h-1zm0 2v8h1V9h-1zm-3 2v1h7v-1h-7z" />
//         </svg>
//       ),
//     },
//     {
//       code: "ar",
//       name: "العربية",
//       icon: (
//         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.359 4.008h.718c.344 0 .598.086.761.258.164.172.246.394.246.667 0 .177-.05.329-.152.456a.864.864 0 01-.293.264c-.106.055-.27.105-.49.152v.02c.13.013.246.04.35.082.103.04.19.094.264.161a.75.75 0 01.176.264c.043.104.065.224.065.361 0 .193-.046.36-.137.503a.885.885 0 01-.395.334c-.171.078-.38.118-.624.118h-.909V6.008zm1.265 5.084h.9c.24 0 .445.021.612.063.169.04.311.101.427.182.117.081.214.184.29.308.076.123.134.267.173.432.04.163.061.346.061.546 0 .147-.01.286-.032.418a1.928 1.928 0 01-.115.395 1.25 1.25 0 01-.222.343 1.05 1.05 0 01-.352.236 1.97 1.97 0 01-.495.146 3.53 3.53 0 01-.659.052h-1.052v-3.121h.464zm-2.05-.574h-.455V13.5h-.932V10.52H8.71V9.642h2.145v.876z" />
//         </svg>
//       ),
//     },
//     // Add more languages as needed
//   ];

//   // Find current language details
//   const currentLanguage =
//     languages.find((lang) => lang.code === currentLocale) || languages[0];

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Handle language change - using Function type casting to get around TypeScript errors
//   function handleLanguageChange(locale: "en" | "ar") {
//     try {
//       // Using Function cast to bypass TypeScript's type checking
//       (changeLocaleFn as Function)(locale);
//       setIsOpen(false);
//     } catch (error) {
//       console.error("Error changing language:", error);
//     }
//   }

//   return (
//     <div className="relative" ref={dropdownRef}>
//       {/* Current language button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center space-x-2 bg-opacity-10 bg-white px-3 py-2 rounded-full hover:bg-opacity-20 transition-colors duration-200"
//         aria-expanded={isOpen}
//         aria-haspopup="true"
//       >
//         <div className="text-white">{currentLanguage.icon}</div>
//         <span className="text-sm font-medium text-white">
//           {currentLanguage.code.toUpperCase()}
//         </span>
//         <svg
//           className={`w-4 h-4 text-white transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {/* Dropdown */}
//       {isOpen && (
//         <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none right-0">
//           <div className="py-1" role="menu" aria-orientation="vertical">
//             {languages.map((language) => (
//               <button
//                 key={language.code}
//                 onClick={() => handleLanguageChange(language.code)}
//                 className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-100 ${
//                   currentLocale === language.code
//                     ? "bg-gray-50 font-medium"
//                     : ""
//                 }`}
//                 role="menuitem"
//               >
//                 <div className="text-gray-700">{language.icon}</div>
//                 <span>{language.name}</span>
//                 {currentLocale === language.code && (
//                   <svg
//                     className="ml-auto w-4 h-4 text-emerald-500"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                   </svg>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
