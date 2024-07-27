import React, { useState } from "react";
import PropTypes from "prop-types";
import socket from "socket/socket";

const ProductDetails = ({
  name,
  description,
  bidStartingPrice,
  bidStartTime,
  bidEndTime,
  image,
}) => {
  const [text, setText] = useState("");
  const [bidResponse, setBidResponse] = useState("");

  const handlePlaceBid = () => {
    socket.emit("placeBid", { text });
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  socket.on("newBid", (data) => {
    console.log("success----", data);
    setBidResponse(data);
  });

  return (
    <div className="product-details gap-8">
      <img src={image} alt={name} className="product-image" />
      <div className="flex flex-col">
        <h2 className="product-name mt-0">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="bid-info">
          <p>Starting Bid: ${bidStartingPrice}</p>
          <p>Bid Start Time: {bidStartTime}</p>
          <p>Bid End Time: {bidEndTime}</p>
          <input
            onChange={handleTextChange}
            value={text}
            className="ring-0 outline-none block w-full p-4 text-base bg-transparent text-gray-900 dark:text-gray-100"
            placeholder="Enter bid amount"
          />
          <button onClick={handlePlaceBid}>Place bid</button>
          <br />
          {bidResponse}
        </div>
      </div>
    </div>
  );
};
ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bidStartingPrice: PropTypes.number.isRequired,
  bidStartTime: PropTypes.string.isRequired,
  bidEndTime: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductDetails;
