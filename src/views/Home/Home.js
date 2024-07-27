 /** @format */
 
 import React, { useState, useEffect } from "react";
import Chart from "components/shared/Chart";
import ProductDetails from "components/shared/ProductDetails";
import {apiGetProduct} from "services/ProductSevice";
 
 const Home = () => {
  const [biddingData, setBiddingData] = useState([{name: 'anish', price: 12}, {name: 'durvesh', price: 120}, {name: 'anish', price: 150}]);
  useEffect(() => {
  const getData = async () => {
    try{
        const res = await apiGetProduct();
    }catch(e){
        console.log(e);
    }
  }
  getData();
  }, [])
   return (
     <div className="flex flex-col gap-8">
        <ProductDetails
        name={"Product Name"}
        description={"Product Description"}
        bidStartingPrice={10}
        bidStartTime={"10/10/2021"}
        bidEndTime={"10/10/2021"}
        image={"https://via.placeholder.com/150"}
      />
      <Chart data={biddingData} />
     </div>
   );
 };
 
 export default Home;
