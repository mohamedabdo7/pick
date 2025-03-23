import React from "react";

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
  // Sample product data to match the image
  const products: Product[] = [
    {
      id: 1,
      image: "/images/product1.png",
      likes: "1.2k",
      cart: "5",
      productName: "Product Name",
      sellerName: "Seller Name",
      originalPrice: "$40.00",
      salePrice: "$30.00",
    },
    {
      id: 2,
      image: "/images/product2.png",
      likes: "1.1k",
      cart: "8",
      productName: "Product Name",
      sellerName: "Seller Name",
      originalPrice: "$25.00",
      salePrice: "$18.00",
    },
    {
      id: 3,
      image: "/images/product3.png",
      likes: "1.5k",
      cart: "3",
      productName: "Product Name",
      sellerName: "Seller Name",
      originalPrice: "$45.00",
      salePrice: "$35.00",
    },
    {
      id: 4,
      image: "/images/product3.png",
      likes: "1.7k",
      cart: "4",
      productName: "Product Name",
      sellerName: "Seller Name",
      originalPrice: "$55.00",
      salePrice: "$39.00",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join <span className="text-emerald-400">Sell with Pick</span> Now!
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          and become one of <span className="font-semibold">10,000</span>{" "}
          sellers on Pick! Get the best reach for your customers and maximize
          your product sales with our innovative platform. Start selling smarter
          today!
        </p>
      </div>

      <div className="px-48 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto relative">
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
            <div className="pt-1 px-2">
              {/* Likes and Cart Stats */}
              <div className="flex items-center space-x-1 mb-1">
                <div className="flex items-center bg-emerald-100 rounded-full px-2 py-0.5 text-xs">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 text-emerald-500 mr-1"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{product.likes}</span>
                </div>

                <div className="flex items-center bg-emerald-100 rounded-full px-2 py-0.5 text-xs">
                  <svg
                    className="w-3 h-3 text-emerald-500 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  <span>{product.cart}</span>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="font-medium text-sm">{product.productName}</h3>
              <p className="text-gray-500 text-xs">{product.sellerName}</p>

              {/* Pricing */}
              <div className="flex items-center mt-1">
                <span className="text-gray-400 text-xs line-through mr-2">
                  {product.originalPrice}
                </span>
                <span className="text-black font-medium text-sm">
                  {product.salePrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchantSection;
