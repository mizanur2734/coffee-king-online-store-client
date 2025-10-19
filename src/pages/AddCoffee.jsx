import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    newCoffee.email = user?.email;
    newCoffee.likedBy = [];
    console.log(newCoffee);

    axios.post(`${import.meta.env.VITE_API_URL}/add-coffee`, newCoffee)
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate("/")
      })
      .catch((err) => console.log(err))
  };
  return (
    <div className="py-10">
      <div className="bg-[#F4F3F0] container mx-auto text-[#1B1A1A] p-10 md:p-20 rounded-lg">
        {/* Heading */}
        <h1 className="text-4xl text-[#374151] text-center font-semibold mb-4">
          Add New Coffee
        </h1>
        {/* Description */}
        <p className="text-lg max-w-3xl text-center mx-auto text-gray-600">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        {/* Form Section */}
        <form
          onSubmit={handleAddCoffee}
          className="pt-10 space-y-6 border-[#c0aa83]"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              {/* name */}
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#6B4F4F]"
              />
            </div>

            <div className="flex flex-col gap-2">
              {/* Quantity */}
              <label htmlFor="chef" className="font-medium">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#6B4F4F]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supplier */}
            <div className="flex flex-col gap-2">
              <label htmlFor="supplier" className="font-medium">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#6B4F4F]"
              />
            </div>

            <div className="flex flex-col gap-2">
              {/* Taste */}
              <label htmlFor="taste" className="font-medium">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Taste name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#6B4F4F]"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              {/* Price */}
              <label htmlFor="category" className="font-medium">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price per cup"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#6B4F4F]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="font-medium">
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="coffee details"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#6B4F4F]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="photo" className="font-medium">
              Photo
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="photo URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#6B4F4F]"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#D2B48C] text-black font-semibold rounded-md"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
