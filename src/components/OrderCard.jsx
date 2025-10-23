import React from "react";
import { IoMdStar } from "react-icons/io";

const OrderCard = ({ coffee }) => {
   const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee;
  return (
    <div className="relative bg-white shadow  overflow-hidden hover:shadow-md transition-all duration-300 p-6">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={photo}
          alt={name}
          className="w-40 h-40 object-cover rounded-full border-4 border-[#c0aa83] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-semibold mt-20 text-gray-800">{name}</h3>

      {/* Rating */}
      <div className="flex mt-3 text-[#fbb419] text-xl">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </div>

      {/* Button */}
        <button
          className="mt-6 px-3 py-5 md:px-5 md:py-3 hover:bg-[#c0aa83] border border-gray-300
               font-bold w-full  md:w-auto  
                hover:border-black transition-all duration-300 cursor-pointer bg-white text-black"
        >
          Cancel Orders
        </button>
      {/*  */}
      <div className="absolute right-0 bottom-48 flex items-center bg-[#20c9963a] p-3 overflow-hidden w-20 h-10">
        <p>price:{price}</p>
      </div>
    </div>
  );
};

export default OrderCard;
