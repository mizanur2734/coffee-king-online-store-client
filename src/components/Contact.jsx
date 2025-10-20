import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/3">
          <h4 className="text-gray-500 text-lg font-medium">More Than</h4>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800">
            5400
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-gray-700">
            Customers trust us
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Become our dealer
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Curabitur sollicitudin ultrices tortor, eget pulvinar risus cursus
            eu. Vivamus sit amet odio massa. Vivamus dapibus elementum tellus
            nec fermentum. Sed blandit condimentum molestie. In hac habitasse
            platea dictumst. Etiam fringilla a elit at ornare.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row mt-6 md:mt-10 gap-4 md:gap-6">
            <button className="px-6 py-3 md:px-8 md:py-4 bg-black text-white text-sm sm:text-base md:text-base font-bold w-full md:w-auto border-2 border-transparent hover:border-black hover:bg-white hover:text-black transition-all duration-300 rounded-lg">
              Read more
            </button>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-[#c0aa83] text-white text-sm sm:text-base md:text-base font-bold w-full md:w-auto border-2 border-transparent hover:border-black hover:bg-white hover:text-black transition-all duration-300 rounded-lg">
              View products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
