import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const CoffeeDetails = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const { data} = useLoaderData();
  const [coffee, setCoffee] = useState(data)
  
  const {
    _id,
    name,
    quantity,
    supplier,
    taste,
    price,
    details,
    photo,
    likedBy = [],
  } = coffee || {};
  console.log(coffee);

  const [liked, setLiked] = useState(likedBy.includes(user?.email));
  const [likeCount, setLikeCount] = useState(likedBy.length);

  useEffect(() => {
    setLiked(likedBy.includes(user?.email));
  }, [likedBy, user]);

  // handle like / dislike
  const handleLike = () => {
    if (!user?.email) {
      alert("Lojja kore na");
      return; 
    }

    // handle like toggle api fetch call
    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, {
        email: user?.email,
      })
      .then((data) => {
        console.log(data?.data);

        const isLiked = data?.data.liked;
        setLiked(isLiked);
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
      })
      .catch((err) => console.log(err));
  };

  // handle order
  const handleOrder = () => {
    if (!user?.email){
      alert("tomar nijar coffee");
     return 
  }
    const orderInfo = {
      coffeeId: _id,
      customerEmail: user?.email
    }
    // save order in the db
    axios.post(`${import.meta.env.VITE_API_URL}/place-order/${_id}`,orderInfo)
    .then(data => {
      console.log(data)
      setCoffee(prev => {
        return {...prev, quantity: prev.quantity - 1}
      })
      navigate('/my-orders')
    })
  };
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
          <p>
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price}
          </p>
          <p>
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-semibold">Details:</span> {details}
          </p>
          <p>Likes: {likeCount}</p>
        </div>

        <div className="flex gap-2">
          <button onClick={handleOrder} className="btn btn-primary">order</button>
          <button onClick={handleLike} className="btn btn-secondary">
            👇 {liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
