import Image from 'next/image';
import React from "react";

const DontMissSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Don't Miss</h2>

        {/* Image */}
        <div className="relative mb-8">
          <Image
            src="/dont-miss-image.png" // Replace with the actual image path
            width={1344}
            height={700}
            alt="Don&apos;t Miss" // Escape apostrophe
            className="w-full rounded-lg"
          />
        </div>

        {/* Flight Essentials Section */}
        <div className="text-center mt-8">
          {/* Bold Heading */}
          <h3
            className="font-medium text-gray-900"
            style={{
              fontFamily: "Helvetica Neue, sans-serif",
              fontWeight: 500,
              fontSize: "52px",
              lineHeight: "60px",
            }}
          >
            FLIGHT ESSENTIALS
          </h3>

          {/* Description Text */}
          <p
            className="mt-4 text-gray-600"
            style={{
              fontFamily: "Helvetica Neue, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "24px",
            }}
          >
            Your build-to-last, all week wear - but with style only Jordan brand
            can deliver.
          </p>

          {/* Shop Button */}
          <button
            className="mt-6 px-6 py-2 bg-black text-white rounded-[30px] hover:bg-gray-800"
            style={{
              padding: "7.5px 21.88px",
            }}
          >
            Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default DontMissSection;
