"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenuOpen]);

  return (
    <header className="w-full py-4 px-4 sm:px-6 bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="relative h-8 w-20">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="PICK Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/" label="Home" pathname={pathname} />
          <NavLink href="/privacy" label="Privacy" pathname={pathname} />
          <NavLink href="/terms" label="Terms" pathname={pathname} />
        </nav>

        {/* Download Buttons (Visible on Medium Screens and Up) */}
        <div className="hidden sm:flex space-x-2">
          <DownloadButton href="#ios-download" platform="iOS" />
          <DownloadButton href="#android-download" platform="Android" />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-end transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)} // Close when clicking outside
      >
        {/* Mobile Menu (Positioned Right) */}
        <div
          className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-slate-900 shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-6 p-6 pt-16">
            <NavLink
              href="/"
              label="Home"
              pathname={pathname}
              onClick={() => setMobileMenuOpen(false)}
            />
            <NavLink
              href="/privacy"
              label="Privacy"
              pathname={pathname}
              onClick={() => setMobileMenuOpen(false)}
            />
            <NavLink
              href="/terms"
              label="Terms"
              pathname={pathname}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Download Buttons */}
            <div className="pt-6 flex flex-col space-y-4 border-t border-slate-700 mt-4">
              <p className="text-gray-300 text-sm font-medium">
                Download the app:
              </p>
              <DownloadButton
                href="#ios-download"
                platform="iOS"
                onClick={() => setMobileMenuOpen(false)}
              />
              <DownloadButton
                href="#android-download"
                platform="Android"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

// 🏗️ Reusable NavLink Component
function NavLink({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
}) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-white text-lg hover:text-emerald-300 transition-colors ${
        isActive ? "font-bold" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

// 📲 Reusable Download Button Component
function DownloadButton({
  href,
  platform,
  onClick,
}: {
  href: string;
  platform: string;
  onClick?: () => void;
}) {
  return (
    <Button
      variant="default"
      className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium px-4 py-2"
      asChild
    >
      <Link
        href={href}
        onClick={onClick}
        className="flex items-center space-x-2"
      >
        {platform === "iOS" ? (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10z" />
          </svg>
        )}
        <span> Download {platform}</span>
      </Link>
    </Button>
  );
}

// "use client";
// // components/layout/header.tsx
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const pathname = usePathname();

//   const isActive = (path: string) => {
//     return pathname === path;
//   };

//   return (
//     <header className="w-full h-[92px] py-4 px-6 bg-transparent absolute top-0 left-0 right-0 z-10">
//       <div className="container mx-auto flex justify-between items-center h-full">
//         <div className="flex items-center">
//           {/* Logo */}
//           <div className="relative h-8 w-20 mr-8">
//             <Link href="/">
//               <Image
//                 src="/images/logo.svg"
//                 alt="PICK Logo"
//                 fill
//                 sizes="(max-width: 768px) 100px, 150px"
//                 style={{ objectFit: "contain" }}
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <nav className="hidden md:flex space-x-8">
//             <Link
//               href="/"
//               className={`text-white hover:text-emerald-300 transition-colors ${
//                 isActive("/") ? "font-medium" : ""
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/privacy"
//               className={`text-white hover:text-emerald-300 transition-colors ${
//                 isActive("/privacy") ? "font-medium" : ""
//               }`}
//             >
//               Privacy
//             </Link>
//             <Link
//               href="/terms"
//               className={`text-white hover:text-emerald-300 transition-colors ${
//                 isActive("/terms") ? "font-medium" : ""
//               }`}
//             >
//               Terms
//             </Link>
//           </nav>
//         </div>

//         {/* Download Buttons */}
//         <div className="flex space-x-4">
//           {/* iOS Download Button */}
//           <Button
//             variant="default"
//             className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium px-6 py-6"
//             asChild
//           >
//             <Link
//               href="#ios-download"
//               className="flex items-center justify-center space-x-3"
//             >
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z" />
//                 <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//               </svg>
//               <span>iOS Download</span>
//             </Link>
//           </Button>

//           {/* Android Download Button */}
//           <Button
//             variant="default"
//             className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium px-6 py-6"
//             asChild
//           >
//             <Link
//               href="#android-download"
//               className="flex items-center justify-center space-x-3"
//             >
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
//               </svg>
//               <span>Android Download</span>
//             </Link>
//           </Button>
//         </div>

//         {/* Mobile menu icon - shown only on small screens */}
//         <div className="md:hidden">
//           <Button variant="ghost" size="icon" className="text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }
