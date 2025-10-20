import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { data: coffee } = useLoaderData();
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee || {};
  console.log(coffee);
  return (
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-8 mt-36 bg-white shadow-lg rounded-2xl p-8">
  {/* Image */}
  <div className="flex-1 flex justify-center">
    <img
      className="w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-md"
      src={photo}
      alt={name}
    />
  </div>

  {/* Details */}
  <div className="flex-1 space-y-4">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{name}</h3>

    <div className="flex flex-col gap-2 text-gray-700 text-lg">
      <p><span className="font-semibold">Quantity:</span> {quantity}</p>
      <p><span className="font-semibold">Price:</span> {price}</p>
      <p><span className="font-semibold">Supplier:</span> {supplier}</p>
      <p><span className="font-semibold">Taste:</span> {taste}</p>
      <p><span className="font-semibold">Details:</span> {details}</p>
    </div>

    <button className="mt-6 px-6 py-3 bg-[#c0aa83] text-white font-semibold rounded-full hover:bg-[#b5966f] transition-all duration-300 shadow-md">
      Buy Now
    </button>
  </div>
</div>

  );
};

export default CoffeeDetails;
