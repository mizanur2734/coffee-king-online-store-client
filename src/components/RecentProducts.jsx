import React, { useEffect, useState } from "react";
import { Tab,  TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "./ProductCard";

const RecentProducts = () => {
  const [products, setproucts] = useState([])

  // json data fatch
  useEffect(() => {
    fetch("/fakedata.json")
    .then((res) => res.json())
    .then((data) => setproucts(data))
  }, [])
  return (
    <div className="container mx-auto mt-10 px-4 md:px-8">
      <Tabs>
         <div className="flex flex-wrap justify-center md:text-xl font-semibold">
           <Tab>All</Tab>
          <Tab>Coffee</Tab>
          <Tab>Green Coffee</Tab>
          <br />
          <Tab>Italian</Tab>
          <Tab>Roasted Coffee</Tab>
         </div>

        {/* All */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </TabPanel>

        {/* Coffee */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {products
              .filter((p) => p.category === "coffee")
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </TabPanel>

        {/* Green Coffee */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {products
              .filter((p) => p.category === "green coffee")
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </TabPanel>

        {/* Italian */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {products
              .filter((p) => p.category === "italian")
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </TabPanel>

        {/* Roasted Coffee */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {products
              .filter((p) => p.category === "roasted coffee")
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RecentProducts;
