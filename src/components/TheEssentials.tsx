import Image from 'next/image';
import React from "react";

const TheEssentials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="font-medium text-gray-900 mb-8"
          style={{
            fontFamily: "Helvetica Neue, sans-serif",
            fontWeight: 500,
            fontSize: "23px",
            lineHeight: "28px",
            width: "157.61px",
            height: "27px",
          }}
        >
          The Essentials
        </h2>

        {/* Images with Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1: Mens */}
          <div className="relative">
            <Image
              src="/mens-essentials.png" // Replace with actual image
              width={440}
              height={540}
              alt="Men's Essentials"
              className="w-[440px] h-[540px] rounded-lg object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg text-sm">
              Mens
            </button>
          </div>

          {/* Card 2: Womens */}
          <div className="relative">
            <Image
              src="/womens-essentials.png" // Replace with actual image
              width={440}
              height={540}
              alt="Women's Essentials"
              className="w-[440px] h-[540px] rounded-lg object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg text-sm">
              Women
            </button>
          </div>

          {/* Card 3: Kids */}
          <div className="relative">
            <Image
              src="/kids-essentials.png" // Replace with actual image
            width={440}
              height={540}
              alt="Kids Essentials"
              className="w-[440px] h-[540px] rounded-lg object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg text-sm">
              Kids
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Category: Icon */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Icon</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Air Force 1</li>
              <li>Hurache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>

          {/* Category: Shoes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shoes</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>

          {/* Category: Clothing */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Clothing</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullover</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>

          {/* Category: Kids */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kids</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Infant & Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheEssentials;
