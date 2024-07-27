/** @format */

import React, { useState, useEffect } from "react";
import Chart from "components/shared/Chart";
import ProductDetails from "components/shared/ProductDetails";
import { apiGetProduct } from "services/ProductSevice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [biddingData, setBiddingData] = useState([
    // { name: "Time 1", user1: 50, user2: 55, user3: 60 },
    { name: '10:00 AM', user1: 100, user2: 105 },
    { name: '10:05 AM', user1: 110, user2: 115 },
    { name: '10:10 AM', user1: 120, user2: 125 },
    { name: '10:15 AM', user1: 130, user2: 135 },
  ]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await apiGetProduct();
        console.log("res : ", res);
        setProducts(res.data.products);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  

  return (
    <div className="flex flex-col gap-8">
      {products?.map((product, index) => (
        <ProductDetails
          key={index}
          id={product.id}
          name={product.title}
          description={product.product_description}
          bidStartingPrice={product.base_price}
          bidStartTime={product.bid_start_time}
          bidEndTime={product.bid_end_time}
          image={product.product_image[0]}
        />
      ))}
      <Chart data={biddingData} />
    </div>
  );
};

export default Home;
