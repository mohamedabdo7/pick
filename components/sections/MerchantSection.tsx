"use client";

import React from "react";
import { useI18n } from "@/locales/client";
import { useParams } from "next/navigation";
import Image from "next/image";

// Define types for the product data
interface Product {
  id: number;
  image: string;
  likes: string;
  cart: string;
  productName: string;
  sellerName: string;
  originalPrice: string;
  salePrice: string;
}

const MerchantSection: React.FC = () => {
  // Get translations and locale parameter
  const t = useI18n();
  const params = useParams();
  const isRTL = params.locale === "ar";

  // Format price with Riyal icon
  const formatPrice = (price: string) => {
    // Remove currency symbol from the price
    const numericPrice = price.replace(/[^\d.]/g, "");

    return (
      <span className="inline-flex items-center">
        <span>{numericPrice}</span>
        <Image
          src="/icons/reyal.svg"
          alt="SAR"
          width={12}
          height={12}
          className={`inline ${isRTL ? "mr-1" : "ml-1"}`}
        />
      </span>
    );
  };

  // Sample product data to match the image
  const products: Product[] = [
    {
      id: 1,
      image: "/images/product1.png",
      likes: "1.2k",
      cart: "5",
      productName: isRTL ? t("merchant.productName") : "Product Name",
      sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
      originalPrice: isRTL ? "40.00" : "40.00",
      salePrice: isRTL ? "30.00" : "30.00",
    },
    {
      id: 2,
      image: "/images/product2.png",
      likes: "1.1k",
      cart: "8",
      productName: isRTL ? t("merchant.productName") : "Product Name",
      sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
      originalPrice: isRTL ? "25.00" : "25.00",
      salePrice: isRTL ? "18.00" : "18.00",
    },
    {
      id: 3,
      image: "/images/product3.png",
      likes: "1.5k",
      cart: "3",
      productName: isRTL ? t("merchant.productName") : "Product Name",
      sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
      originalPrice: isRTL ? "45.00" : "45.00",
      salePrice: isRTL ? "35.00" : "35.00",
    },
    {
      id: 4,
      image: "/images/product3.png",
      likes: "1.7k",
      cart: "4",
      productName: isRTL ? t("merchant.productName") : "Product Name",
      sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
      originalPrice: isRTL ? "55.00" : "55.00",
      salePrice: isRTL ? "39.00" : "39.00",
    },
  ];

  return (
    <div
      className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 md:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto text-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
          {isRTL ? t("merchant.joinNow1") : "Join"}{" "}
          <span className="text-emerald-400">
            {isRTL ? t("merchant.sellWithPick") : "Sell with Pick"}
          </span>{" "}
          {isRTL ? t("merchant.joinNow2") : "Now!"}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          {isRTL ? t("merchant.becomeOne1") : "and become one of"}{" "}
          <span className="font-semibold">10,000</span>{" "}
          {isRTL
            ? t("merchant.becomeOne2")
            : "sellers on Pick! Get the best reach for your customers and maximize your product sales with our innovative platform. Start selling smarter today!"}
        </p>
      </div>

      {/* Product grid with proper responsive layout that preserves original widths */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 sm:px-8 md:px-16 lg:px-48">
          {products.map((product: Product, index) => (
            <div
              key={product.id + index}
              className="rounded-lg overflow-hidden bg-white z-10"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="pt-1 px-2 pb-2">
                {/* Likes and Cart Stats */}
                <div
                  className={`flex items-center ${
                    isRTL ? "space-x-reverse" : ""
                  } space-x-1 mb-1`}
                >
                  <div className="flex items-center bg-emerald-100 rounded-full px-2 py-0.5 text-xs">
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-3 h-3 text-emerald-500 ${
                        isRTL ? "ml-1" : "mr-1"
                      }`}
                      fill="currentColor"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{product.likes}</span>
                  </div>

                  <div className="flex items-center bg-emerald-100 rounded-full px-2 py-0.5 text-xs">
                    <svg
                      className={`w-3 h-3 text-emerald-500 ${
                        isRTL ? "ml-1" : "mr-1"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    <span>{product.cart}</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="font-medium text-xs sm:text-sm">
                  {product.productName}
                </h3>
                <p className="text-gray-500 text-xs">{product.sellerName}</p>

                {/* Pricing */}
                <div
                  className={`flex items-center mt-1 ${
                    isRTL ? "flex-row-reverse justify-end" : ""
                  }`}
                >
                  <span
                    className={`text-gray-400 text-xs line-through ${
                      isRTL ? "ml-2" : "mr-2"
                    }`}
                  >
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-black font-medium text-xs sm:text-sm">
                    {formatPrice(product.salePrice)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;

// "use client";

// import React from "react";
// import { useI18n } from "@/locales/client";
// import { useParams } from "next/navigation";

// // Define types for the product data
// interface Product {
//   id: number;
//   image: string;
//   likes: string;
//   cart: string;
//   productName: string;
//   sellerName: string;
//   originalPrice: string;
//   salePrice: string;
// }

// const MerchantSection: React.FC = () => {
//   // Get translations and locale parameter
//   const t = useI18n();
//   const params = useParams();
//   const isRTL = params.locale === "ar";

//   // Sample product data to match the image
//   const products: Product[] = [
//     {
//       id: 1,
//       image: "/images/product1.png",
//       likes: "1.2k",
//       cart: "5",
//       productName: isRTL ? t("merchant.productName") : "Product Name",
//       sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
//       originalPrice: isRTL ? "40.00$" : "$40.00",
//       salePrice: isRTL ? "30.00$" : "$30.00",
//     },
//     {
//       id: 2,
//       image: "/images/product2.png",
//       likes: "1.1k",
//       cart: "8",
//       productName: isRTL ? t("merchant.productName") : "Product Name",
//       sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
//       originalPrice: isRTL ? "25.00$" : "$25.00",
//       salePrice: isRTL ? "18.00$" : "$18.00",
//     },
//     {
//       id: 3,
//       image: "/images/product3.png",
//       likes: "1.5k",
//       cart: "3",
//       productName: isRTL ? t("merchant.productName") : "Product Name",
//       sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
//       originalPrice: isRTL ? "45.00$" : "$45.00",
//       salePrice: isRTL ? "35.00$" : "$35.00",
//     },
//     {
//       id: 4,
//       image: "/images/product3.png",
//       likes: "1.7k",
//       cart: "4",
//       productName: isRTL ? t("merchant.productName") : "Product Name",
//       sellerName: isRTL ? t("merchant.sellerName") : "Seller Name",
//       originalPrice: isRTL ? "55.00$" : "$55.00",
//       salePrice: isRTL ? "39.00$" : "$39.00",
//     },
//   ];

//   return (
//     <div
//       className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 md:px-8"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       <div className="max-w-6xl mx-auto text-center mb-6 md:mb-8">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
//           {isRTL ? t("merchant.joinNow1") : "Join"}{" "}
//           <span className="text-emerald-400">
//             {isRTL ? t("merchant.sellWithPick") : "Sell with Pick"}
//           </span>{" "}
//           {isRTL ? t("merchant.joinNow2") : "Now!"}
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
//           {isRTL ? t("merchant.becomeOne1") : "and become one of"}{" "}
//           <span className="font-semibold">10,000</span>{" "}
//           {isRTL
//             ? t("merchant.becomeOne2")
//             : "sellers on Pick! Get the best reach for your customers and maximize your product sales with our innovative platform. Start selling smarter today!"}
//         </p>
//       </div>

//       {/* Product grid with proper responsive layout that preserves original widths */}
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 sm:px-8 md:px-16 lg:px-48">
//           {products.map((product: Product, index) => (
//             <div
//               key={product.id + index}
//               className="rounded-lg overflow-hidden bg-white z-10"
//             >
//               {/* Product Image */}
//               <div className="relative">
//                 <img
//                   src={product.image}
//                   alt={product.productName}
//                   className="w-full aspect-square object-cover"
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="pt-1 px-2 pb-2">
//                 {/* Likes and Cart Stats */}
//                 <div
//                   className={`flex items-center ${
//                     isRTL ? "space-x-reverse" : ""
//                   } space-x-1 mb-1`}
//                 >
//                   <div className="flex items-center bg-emerald-100 rounded-full px-2 py-0.5 text-xs">
//                     <svg
//                       viewBox="0 0 24 24"
//                       className={`w-3 h-3 text-emerald-500 ${
//                         isRTL ? "ml-1" : "mr-1"
//                       }`}
//                       fill="currentColor"
//                     >
//                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                     </svg>
//                     <span>{product.likes}</span>
//                   </div>

//                   <div className="flex items-center bg-emerald-100 rounded-full px-2 py-0.5 text-xs">
//                     <svg
//                       className={`w-3 h-3 text-emerald-500 ${
//                         isRTL ? "ml-1" : "mr-1"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
//                     </svg>
//                     <span>{product.cart}</span>
//                   </div>
//                 </div>

//                 {/* Product Name */}
//                 <h3 className="font-medium text-xs sm:text-sm">
//                   {product.productName}
//                 </h3>
//                 <p className="text-gray-500 text-xs">{product.sellerName}</p>

//                 {/* Pricing */}
//                 <div
//                   className={`flex items-center mt-1 ${
//                     isRTL ? "flex-row-reverse justify-end" : ""
//                   }`}
//                 >
//                   <span
//                     className={`text-gray-400 text-xs line-through ${
//                       isRTL ? "ml-2" : "mr-2"
//                     }`}
//                   >
//                     {product.originalPrice}
//                   </span>
//                   <span className="text-black font-medium text-xs sm:text-sm">
//                     {product.salePrice}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MerchantSection;
