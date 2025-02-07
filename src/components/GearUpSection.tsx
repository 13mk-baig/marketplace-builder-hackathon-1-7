import Image from 'next/image';
import React from "react";

const GearUpSection = () => {
  const products = [
    {
      id: 1,
      name: "Men's Half Sleeve Top",
      price: "₹999",
      category: "Running Top",
      image: "/mens-top.png", // Replace with the correct image path
    },
    {
      id: 2,
      name: "Men's Shorts",
      price: "₹1,299",
      category: "Running Shorts",
      image: "/mens-shorts.png", // Replace with the correct image path
    },
    {
      id: 3,
      name: "Women's Long Sleeve Running Top",
      price: "₹1,499",
      category: "Running Top",
      image: "/womens-top.png", // Replace with the correct image path
    },
    {
      id: 4,
      name: "Women's Running Legging with Pockets",
      price: "₹1,999",
      category: "Running Leggings",
      image: "/womens-leggings.png", // Replace with the correct image path
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gear Up</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                width={300}
                height={393}
                alt={product.name}
                className="w-full h-48 object-contain bg-white"
              />

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-md font-medium text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearUpSection;
