import Image from 'next/image';
import Link from 'next/link';
import React from "react";

const FeaturedSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Featured
        </h2>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/featured-image.jpg" // Replace with the actual image path
            width={1344}
            height={700}
            alt="Running outdoors"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center mt-8">
          <h3 className="text-4xl font-bold text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h3>
          <p className="text-md text-gray-600 mt-4">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>

          {/* Call-to-Action Button */}
          <Link href="/Products" passHref>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 text-sm font-medium">
            
            Find Your Shoe
          
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
