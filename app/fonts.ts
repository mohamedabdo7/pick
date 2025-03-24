// app/fonts.js
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

// Load Montserrat for English from Google Fonts
export const montserratEn = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// Define the Montserrat Arabic as a local font
export const montserratAr = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-Arabic-Thin 250.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-ExtraLight 275.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-Light 300.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-Regular 400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-Medium 500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-SemiBold 600.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-Bold 700.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-ExtraBold 800.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Arabic-Black 900.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-arabic",
  display: "swap",
});

// import { Montserrat } from "next/font/google";
// import localFont from "next/font/local";
// // import '../public/fonts/Montserrat-Arabic Regular 400.otf'
// // Load Montserrat for English
// export const montserratEn = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
//   display: "swap",
// });

// // Load Montserrat Arabic as a local font
// // Make sure to add the font files to your public directory
// export const montserratAr = localFont({
//   src: [
//     {
//       path: "../public/fonts/Montserrat-Arabic Regular 400.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Montserrat-Arabic Medium 500.otf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Montserrat-Arabic Bold 700.otf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-montserrat-arabic",
//   display: "swap",
// });
