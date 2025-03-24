"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/locales/client";
import { useParams } from "next/navigation";

export default function Header() {
  const t = useI18n();
  const params = useParams();
  const isRTL = params.locale === "ar";
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
    <header
      className="w-full py-4 px-4 sm:px-6 bg-transparent absolute top-0 left-0 right-0 z-50"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="relative h-8 w-20">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt={isRTL ? t("header.logoAlt") : "PICK Logo"}
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className={`flex ${isRTL ? "gap-8" : "space-x-8"}`}>
            <NavLink
              href="/"
              label={isRTL ? t("header.home") : "Home"}
              pathname={pathname}
              isRTL={isRTL}
            />
            <NavLink
              href="/privacy"
              label={isRTL ? t("header.privacy") : "Privacy"}
              pathname={pathname}
              isRTL={isRTL}
            />
            <NavLink
              href="/terms"
              label={isRTL ? t("header.terms") : "Terms"}
              pathname={pathname}
              isRTL={isRTL}
            />
          </div>
        </nav>

        {/* Download Buttons and Language Selector (Visible on Medium Screens and Up) */}
        <div
          className={`hidden sm:flex items-center ${
            isRTL ? "space-x-reverse" : ""
          } space-x-3`}
        >
          <LanguageSwitcher />
          <DownloadButton href="#ios-download" platform="iOS" isRTL={isRTL} />
          <DownloadButton
            href="#android-download"
            platform="Android"
            isRTL={isRTL}
          />
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
        className={`fixed inset-0 bg-black bg-opacity-80 z-50 flex ${
          isRTL ? "justify-start" : "justify-end"
        } transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)} // Close when clicking outside
      >
        {/* Mobile Menu (Positioned Right for LTR, Left for RTL) */}
        <div
          className={`fixed top-0 ${
            isRTL ? "left-0" : "right-0"
          } w-4/5 max-w-xs h-full bg-slate-900 shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen
              ? "translate-x-0"
              : isRTL
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          {/* Close Button */}
          <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"}`}>
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
              label={isRTL ? t("header.home") : "Home"}
              pathname={pathname}
              onClick={() => setMobileMenuOpen(false)}
              isRTL={isRTL}
            />
            <NavLink
              href="/privacy"
              label={isRTL ? t("header.privacy") : "Privacy"}
              pathname={pathname}
              onClick={() => setMobileMenuOpen(false)}
              isRTL={isRTL}
            />
            <NavLink
              href="/terms"
              label={isRTL ? t("header.terms") : "Terms"}
              pathname={pathname}
              onClick={() => setMobileMenuOpen(false)}
              isRTL={isRTL}
            />

            {/* Language Switcher */}
            <div className="pt-4">
              <p className="text-gray-300 text-sm font-medium mb-2">
                {isRTL ? t("header.selectLanguage") : "Select language:"}
              </p>
              <LanguageSwitcher />
            </div>

            {/* Download Buttons */}
            <div className="pt-6 flex flex-col space-y-4 border-t border-slate-700 mt-4">
              <p className="text-gray-300 text-sm font-medium">
                {isRTL ? t("header.downloadApp") : "Download the app:"}
              </p>
              <DownloadButton
                href="#ios-download"
                platform="iOS"
                onClick={() => setMobileMenuOpen(false)}
                isRTL={isRTL}
              />
              <DownloadButton
                href="#android-download"
                platform="Android"
                onClick={() => setMobileMenuOpen(false)}
                isRTL={isRTL}
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
  isRTL,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
  isRTL: boolean;
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
  isRTL,
}: {
  href: string;
  platform: string;
  onClick?: () => void;
  isRTL: boolean;
}) {
  const t = useI18n();

  return (
    <Button
      variant="default"
      className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium px-4 py-2"
      asChild
    >
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center ${
          isRTL ? "space-x-reverse" : ""
        } space-x-2`}
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
        <span>
          {isRTL ? t(`header.download${platform}`) : `Download ${platform}`}
        </span>
      </Link>
    </Button>
  );
}
