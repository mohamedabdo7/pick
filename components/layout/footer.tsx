import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SocialMediaLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const FooterSection: React.FC = () => {
  const socialLinks: SocialMediaLink[] = [
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      ),
      url: "https://twitter.com",
    },
    {
      name: "Snapchat",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M21.93 8.5c-.08-.63-.34-1.5-.73-2.3-.46-.93-1.04-1.71-1.72-2.32a6.99 6.99 0 0 0-3.92-1.65C14.22 2.1 13.58 2 12 2c-1.58 0-2.22.1-3.56.23-1.58.14-2.87.69-3.92 1.65-.68.61-1.26 1.39-1.72 2.32-.39.8-.65 1.67-.73 2.3C1.82 9.45 2 9.95 2 12c0 2.05-.18 2.55-.07 3.5.08.63.34 1.5.73 2.3.46.93 1.04 1.71 1.72 2.32 1.05.96 2.34 1.51 3.92 1.65 1.34.13 1.98.23 3.56.23 1.58 0 2.22-.1 3.56-.23 1.58-.14 2.87-.69 3.92-1.65.68-.61 1.26-1.39 1.72-2.32.39-.8.65-1.67.73-2.3.25-.95.07-1.45.07-3.5 0-2.05.18-2.55.07-3.5ZM12 18c-1.2 0-2.27-.52-3-1.35-1.1.65-2.85.95-3.5.55-.35-.22-.35-.75-.25-1.25.1-.45.35-1.25.35-1.25-.55-.12-1.1-1.13-1.1-1.7 0-.25.1-.4.25-.45.25-.1.65 0 1 .4.35-.6.65-1.05.75-1.25.1-.25 0-.5-.35-.9-.15-.15-.35-.35-.65-.65-.3-.3-.5-.8-.5-1.35 0-1.65 2.55-3.2 5.75-3.2 3.2 0 5.75 1.55 5.75 3.2 0 .55-.2 1.05-.5 1.35-.3.3-.5.5-.65.65-.35.4-.45.65-.35.9.1.2.4.65.75 1.25.35-.4.75-.5 1-.4.15.05.25.2.25.45 0 .57-.55 1.58-1.1 1.7 0 0 .25.8.35 1.25.1.5.1 1.03-.25 1.25-.65.4-2.4.1-3.5-.55-.73.83-1.8 1.35-3 1.35Z" />
        </svg>
      ),
      url: "https://snapchat.com",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M16.6 14.2c-.23-.12-1.33-.65-1.54-.73s-.36-.11-.5.11c-.15.22-.58.73-.7.88s-.26.17-.48.06c-.22-.11-.92-.34-1.76-1.08-.65-.6-1.09-1.33-1.21-1.56-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.38.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.38-.06-.11-.5-1.21-.69-1.65-.18-.43-.37-.37-.5-.38-.13-.01-.28-.01-.43-.01-.15 0-.37.06-.56.28-.19.22-.72.71-.72 1.72s.74 2 .84 2.13c.1.14 1.43 2.17 3.46 3.05 2.03.87 2.03.58 2.4.55.36-.03 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.19-.13-.41-.24m-4.1 5.59c-1.19 0-2.32-.32-3.31-.92l-.24-.14-2.47.64.66-2.39-.16-.25a6.5 6.5 0 0 1 1-8.45 6.46 6.46 0 0 1 4.59-1.91 6.49 6.49 0 0 1 4.5 11.09 6.43 6.43 0 0 1-4.57 2.33m5.49-11.88c-1.46-1.45-3.4-2.26-5.49-2.26-4.3 0-7.8 3.5-7.8 7.8 0 1.37.36 2.72 1.05 3.91l-1.11 4.07 4.16-1.09a7.84 7.84 0 0 0 3.7.94h.004c4.3 0 7.8-3.5 7.8-7.8 0-2.08-.8-4.03-2.27-5.48" />
        </svg>
      ),
      url: "https://whatsapp.com",
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M21.58 7.19c-.24-.84-.87-1.5-1.71-1.74C18.25 5 12 5 12 5s-6.25 0-7.87.45c-.84.24-1.47.9-1.71 1.74C2 8.78 2 12 2 12s0 3.22.42 4.81c.24.84.87 1.5 1.71 1.74 1.62.45 7.87.45 7.87.45s6.25 0 7.87-.45c.84-.24 1.47-.9 1.71-1.74C22 15.22 22 12 22 12s0-3.22-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
        </svg>
      ),
      url: "https://youtube.com",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <path d="M12 2.16c3.21 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.64.07 4.85 0 3.21-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23a3.69 3.69 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07-3.21 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.64-.07-4.85 0-3.21.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.64-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.15.63c-.8.31-1.47.72-2.14 1.39-.67.67-1.08 1.34-1.39 2.14-.3.75-.5 1.63-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.9.31.8.72 1.47 1.39 2.14.67.67 1.34 1.08 2.14 1.39.75.3 1.63.5 2.9.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.9-.56.8-.31 1.47-.72 2.14-1.39.67-.67 1.08-1.34 1.39-2.14.3-.75.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.9-.31-.8-.72-1.47-1.39-2.14-.67-.67-1.34-1.08-2.14-1.39-.75-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      ),
      url: "https://instagram.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 px-4 sm:px-8 border-b-2 border-blue-500 relative">
      <div className="max-w-6xl mx-auto">
        {/* Top section with Logo and links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-12">
          {/* Left Side */}
          <div className="w-full md:w-auto mb-8 md:mb-0 flex flex-col items-center md:items-start">
            {/* Logo */}
            <div className="mb-5 relative w-32 h-12">
              <Image
                src="/images/logo.svg"
                alt="PICK Logo"
                width={128}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className="inline-block text-sm text-gray-300 hover:text-white transition-colors mb-5"
            >
              Contact with us
            </Link>

            {/* Social Media Icons - in 2 rows of 3 */}
            <div className="grid grid-cols-3 gap-3 max-w-[160px]">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-emerald-500 hover:border-emerald-500 transition-colors"
                >
                  <div className="w-5 h-5">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end space-y-2 w-full md:w-auto">
            <Link
              href="/privacy"
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Copyright - aligned center and at the bottom */}
        <div className="text-center text-gray-400 text-xs mt-6">
          @All copyright recieved to Pick 2025
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// interface SocialMediaLink {
//   name: string;
//   icon: React.ReactNode;
//   url: string;
// }

// const FooterSection: React.FC = () => {
//   const socialLinks: SocialMediaLink[] = [
//     {
//       name: "Facebook",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-full h-full"
//         >
//           <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
//         </svg>
//       ),
//       url: "https://facebook.com",
//     },
//     {
//       name: "Twitter",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-full h-full"
//         >
//           <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
//         </svg>
//       ),
//       url: "https://twitter.com",
//     },
//     {
//       name: "Snapchat",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-full h-full"
//         >
//           <path d="M21.93 8.5c-.08-.63-.34-1.5-.73-2.3-.46-.93-1.04-1.71-1.72-2.32a6.99 6.99 0 0 0-3.92-1.65C14.22 2.1 13.58 2 12 2c-1.58 0-2.22.1-3.56.23-1.58.14-2.87.69-3.92 1.65-.68.61-1.26 1.39-1.72 2.32-.39.8-.65 1.67-.73 2.3C1.82 9.45 2 9.95 2 12c0 2.05-.18 2.55-.07 3.5.08.63.34 1.5.73 2.3.46.93 1.04 1.71 1.72 2.32 1.05.96 2.34 1.51 3.92 1.65 1.34.13 1.98.23 3.56.23 1.58 0 2.22-.1 3.56-.23 1.58-.14 2.87-.69 3.92-1.65.68-.61 1.26-1.39 1.72-2.32.39-.8.65-1.67.73-2.3.25-.95.07-1.45.07-3.5 0-2.05.18-2.55.07-3.5ZM12 18c-1.2 0-2.27-.52-3-1.35-1.1.65-2.85.95-3.5.55-.35-.22-.35-.75-.25-1.25.1-.45.35-1.25.35-1.25-.55-.12-1.1-1.13-1.1-1.7 0-.25.1-.4.25-.45.25-.1.65 0 1 .4.35-.6.65-1.05.75-1.25.1-.25 0-.5-.35-.9-.15-.15-.35-.35-.65-.65-.3-.3-.5-.8-.5-1.35 0-1.65 2.55-3.2 5.75-3.2 3.2 0 5.75 1.55 5.75 3.2 0 .55-.2 1.05-.5 1.35-.3.3-.5.5-.65.65-.35.4-.45.65-.35.9.1.2.4.65.75 1.25.35-.4.75-.5 1-.4.15.05.25.2.25.45 0 .57-.55 1.58-1.1 1.7 0 0 .25.8.35 1.25.1.5.1 1.03-.25 1.25-.65.4-2.4.1-3.5-.55-.73.83-1.8 1.35-3 1.35Z" />
//         </svg>
//       ),
//       url: "https://snapchat.com",
//     },
//     {
//       name: "WhatsApp",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-full h-full"
//         >
//           <path d="M16.6 14.2c-.23-.12-1.33-.65-1.54-.73s-.36-.11-.5.11c-.15.22-.58.73-.7.88s-.26.17-.48.06c-.22-.11-.92-.34-1.76-1.08-.65-.6-1.09-1.33-1.21-1.56-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.38.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.38-.06-.11-.5-1.21-.69-1.65-.18-.43-.37-.37-.5-.38-.13-.01-.28-.01-.43-.01-.15 0-.37.06-.56.28-.19.22-.72.71-.72 1.72s.74 2 .84 2.13c.1.14 1.43 2.17 3.46 3.05 2.03.87 2.03.58 2.4.55.36-.03 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.19-.13-.41-.24m-4.1 5.59c-1.19 0-2.32-.32-3.31-.92l-.24-.14-2.47.64.66-2.39-.16-.25a6.5 6.5 0 0 1 1-8.45 6.46 6.46 0 0 1 4.59-1.91 6.49 6.49 0 0 1 4.5 11.09 6.43 6.43 0 0 1-4.57 2.33m5.49-11.88c-1.46-1.45-3.4-2.26-5.49-2.26-4.3 0-7.8 3.5-7.8 7.8 0 1.37.36 2.72 1.05 3.91l-1.11 4.07 4.16-1.09a7.84 7.84 0 0 0 3.7.94h.004c4.3 0 7.8-3.5 7.8-7.8 0-2.08-.8-4.03-2.27-5.48" />
//         </svg>
//       ),
//       url: "https://whatsapp.com",
//     },
//     {
//       name: "YouTube",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-full h-full"
//         >
//           <path d="M21.58 7.19c-.24-.84-.87-1.5-1.71-1.74C18.25 5 12 5 12 5s-6.25 0-7.87.45c-.84.24-1.47.9-1.71 1.74C2 8.78 2 12 2 12s0 3.22.42 4.81c.24.84.87 1.5 1.71 1.74 1.62.45 7.87.45 7.87.45s6.25 0 7.87-.45c.84-.24 1.47-.9 1.71-1.74C22 15.22 22 12 22 12s0-3.22-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
//         </svg>
//       ),
//       url: "https://youtube.com",
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-full h-full"
//         >
//           <path d="M12 2.16c3.21 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.64.07 4.85 0 3.21-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23a3.69 3.69 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07-3.21 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.64-.07-4.85 0-3.21.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.64-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.15.63c-.8.31-1.47.72-2.14 1.39-.67.67-1.08 1.34-1.39 2.14-.3.75-.5 1.63-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.9.31.8.72 1.47 1.39 2.14.67.67 1.34 1.08 2.14 1.39.75.3 1.63.5 2.9.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.9-.56.8-.31 1.47-.72 2.14-1.39.67-.67 1.08-1.34 1.39-2.14.3-.75.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.9-.31-.8-.72-1.47-1.39-2.14-.67-.67-1.34-1.08-2.14-1.39-.75-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
//         </svg>
//       ),
//       url: "https://instagram.com",
//     },
//   ];

//   return (
//     <footer className="bg-gray-900 text-white py-10 px-8 border-b-2 border-blue-500 relative">
//       <div className="max-w-6xl mx-auto">
//         {/* Top section with Logo and links */}
//         <div className="flex flex-col md:flex-row justify-between mb-12">
//           {/* Left Side */}
//           <div className="mb-8 md:mb-0">
//             {/* Logo */}
//             <div className="mb-5 relative w-32 h-12">
//               {/* <img
//                 src="/images/logo.svg"
//                 alt="PICK Logo"
//                 className="w-full h-full object-contain"
//               /> */}
//               <Image
//                 src="/images/logo.svg"
//                 alt="PICK Logo"
//                 width={128} // Adjust width as needed
//                 height={48} // Adjust height as needed
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Contact */}
//             <Link
//               href="/contact"
//               className="inline-block text-sm text-gray-300 hover:text-white transition-colors mb-5"
//             >
//               Contact with us
//             </Link>

//             {/* Social Media Icons - in 2 rows of 3 */}
//             <div className="grid grid-cols-3 gap-3 max-w-[160px]">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   aria-label={link.name}
//                   className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-emerald-500 hover:border-emerald-500 transition-colors"
//                 >
//                   <div className="w-5 h-5">{link.icon}</div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="text-right  flex flex-col justify-center items-center  ">
//             <Link
//               href="/privacy"
//               className="block text-sm text-white hover:text-gray-300 transition-colors mb-2"
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               href="/terms"
//               className="block text-sm text-white hover:text-gray-300 transition-colors"
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>

//         {/* Copyright - aligned center and at the bottom */}
//         <div className="text-center text-gray-400 text-xs">
//           @All copyright recieved to Pick 2025
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;
