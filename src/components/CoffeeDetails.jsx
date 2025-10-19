import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { data: coffee } = useLoaderData();
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee || {};
  console.log(coffee);
  return (
    <div className="container px-8 flex flex-col md:flex-row justify-around items-center mt-36">
      <div className="flex-1">
        <img className="w-[400px]" src={photo} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-black">name: {name}</h3>
        <p>quantity: {quantity}</p>
        <p>price: {price}</p>
        <p>supplier: {supplier}</p>
        <p>taste: {taste}</p>
        <p>details: {details}</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
