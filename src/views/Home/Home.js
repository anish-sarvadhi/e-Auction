/** @format */

import React, { useState, useEffect } from "react";
import Chart from "components/shared/Chart";
import ProductDetails from "components/shared/ProductDetails";
import { apiGetProduct } from "services/ProductSevice";

const Home = () => {
  const [biddingData, setBiddingData] = useState([
    { name: "anish", price: 12 },
    { name: "durvesh", price: 120 },
    { name: "anish", price: 150 },
  ]);

  const [products, setProducts] = useState([]);

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
      {products.map((product) => (
        <ProductDetails
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
