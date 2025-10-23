import React, { use, useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/my-orders/${user?.email}`)
      .then((data) => {
        console.log(data?.data);
        setOrders(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-black  md:mt-34 mt-30 text-center text-2xl md:text-4xl font-bold">
        My Orders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 space-y-6 md:space-y-2  py-10 md:px-8 px-4 container mx-auto">
        {orders.map((coffee) => (
          <OrderCard key={coffee._id} coffee={coffee}></OrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
