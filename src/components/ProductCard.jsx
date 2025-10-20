import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, description, price } = product;

  return (
    <div className="group text-center bg-white shadow hover:shadow-md  p-6 flex flex-col justify-between h-full min-h-[450px]">
      {/* Image */}
      <img className="w-48 h-48 object-cover mx-auto" src={image} alt={title} />

      {/* Title */}
      <h3 className="text-2xl group-hover:text-[#c0aa83] font-semibold mt-6 text-gray-800 transition-colors duration-300">{title}</h3>

      {/* Description */}
      <p className="text-[16px] mt-3 text-gray-600 line-clamp-3">
        {description}
      </p>

      {/* Price */}
      <p className="mt-2 font-semibold text-gray-800">Price: {price}</p>

      {/* Button */}
      <button className="mt-6 px-5 py-2 md:px-5 md:py-3 hover:bg-[#c0aa83] border border-gray-300 font-bold w-full md:w-auto hover:border-black transition-all duration-300 cursor-pointer bg-white text-black rounded-full">
        View products
      </button>
    </div>
  );
};

export default ProductCard;
