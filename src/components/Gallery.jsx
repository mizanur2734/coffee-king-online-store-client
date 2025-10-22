import React from "react";
import img1 from "../assets/banner/nathan-dumlao-zUNs99PGDg0-unsplash.jpg";
import img2 from "../assets/banner/coffee-ai-generated.jpg";
const Gallery = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-32 mt-18 md:mt-28 py-8 md:py-10 px-4 md:px-8">
      {/* Left Images */}
      <div className="relative">
        <img
          src={img1}
          alt="Main"
          className="w-[300px] h-[350px] md:w-[350px] md:h-[450px] object-cover "
        />
        <img
          src={img2}
          alt="Overlay"
          className="absolute -bottom-16 left-24 w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="max-w-lg">
        <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">
          Optional Subtitle
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4 text-gray-900">
          We Develop & Create <br className="md:block hidden"/> Digital Future
        </h2>
        <p className="text-gray-600 mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>

        <div className="text-gray-700 mb-8 space-y-1">
          <p>
            <span className="font-semibold">MON – FRI:</span> 9 AM – 6 PM
          </p>
          <p>
            <span className="font-semibold">SATURDAY:</span> 9 AM – 5 PM
          </p>
        </div>

        <button className="bg-[#c0aa83] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a48f6b] transition-all duration-300">
          About Us
        </button>
      </div>
    </div>
  );
};

export default Gallery;
