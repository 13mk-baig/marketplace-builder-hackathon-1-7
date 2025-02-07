import Image from 'next/image';
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white">
      
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative w-full">
          <Image
            src="/main image.png" // Ensure the image is stored in the public folder
            layout="responsive"
            width={2000}  
            height={977} 
            alt="Nike Air Max Pulse"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center mt-12 px-4">
          {/* Subheading */}
          <h3 className="text-sm font-medium text-black-500 uppercase tracking-wide">
            <b>First Look</b>
          </h3>

          {/* Product Name */}
          <h1 className="text-5xl font[Helvetica Neue]-extrabold text-black mt-4">
            NIKE AIR MAX PULSE
          </h1>

          {/* Product Description */}
          <p className="text-lg font[Helvetica Neue] text-black mt-6 leading-7">
            Extreme comfort, hyper durable, max volume. Introducing the Air Max Pulse<br />
            — designed to push you past your limits
            and help you go to the max.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            {/* Notify Me Button */}
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 text-sm font-medium">
              Notify Me
            </button>

            {/* Shop Air Max Button */}
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 placeholder: text-sm font-medium">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
