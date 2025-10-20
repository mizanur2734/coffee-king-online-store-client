import React from "react";
import image from "../assets/banner/coffee-cup-1.png";
const Contact = () => {
  return (
    <div className="container mx-auto py-16 md:mt-24 px-4 md:px-8 mb-48">
      <div className="flex flex-col md:flex-row md:items-center items-start justify-between md:gap-10">
        {/* Left Section */}
        <div 
          className="relative text-left md:w-[500px] md:h-[300px] h-[200px]"
          style={{
           backgroundImage: window.innerWidth >= 700 ? `url(${image})` : "none",
            backgroundPosition: "right center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-lg md:text-2xl font-bold">More Than</h4>
          <h1 className="text-5xl md:text-8xl text-[#c0aa83] font-bold mt-2">
            5400
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 md:leading-12">
            Customers <br /> trust us
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-3/6 text-left">
          <h2 className="text-3xl md:text-5xl font-bold">Become our dealer</h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Curabitur sollicitudin ultrices tortor, eget pulvinar risus cursus
            eu. Vivamus sit amet odio massa. Vivamus dapibus elementum tellus
            nec fermentum. Sed blandit condimentum molestie. In hac habitasse
            platea dictumst. Etiam fringilla a elit at ornare.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row mt-6 md:mt-10 gap-4 md:gap-6 md:w-full w-3/6">
            
            <button className="px-6 py-3 md:px-8 md:py-3 bg-[#c0aa83] text-white text-sm sm:text-base md:text-base font-bold w-full  md:w-auto  border-transparent hover:border-black transition-all duration-300 border-2 cursor-pointer hover:bg-white hover:text-black">
              Become a dealer
            </button>
            <button
              className="px-6 py-3 md:px-8 md:py-3 bg-black text-white text-sm sm:text-base md:text-base font-bold  w-5/6 md:w-auto
                border-transparent hover:border-black transition-all duration-300 border-2 cursor-pointer hover:bg-white hover:text-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
