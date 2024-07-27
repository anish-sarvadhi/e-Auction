/** @format */

import React from "react";
import ProductDetails from "components/shared/ProductDetails";

const Home = () => {
  return (
    <div>
      <ProductDetails
        name={"Product Name"}
        description={"Product Description"}
        bidStartingPrice={10}
        bidStartTime={"10/10/2021"}
        bidEndTime={"10/10/2021"}
        image={"https://via.placeholder.com/150"}
      />
    </div>
  );
};

export default Home;
