import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ name, description, bidStartingPrice, bidStartTime, bidEndTime, image }) => {
  return (
    <div className="product-details gap-8">
      <img src={image} alt={name} className="product-image" />
      <div className='flex flex-col'>
      <h2 className="product-name mt-0">{name}</h2>
      <p className="product-description">{description}</p>
      <div className="bid-info">
        <p>Starting Bid: ${bidStartingPrice}</p>
        <p>Bid Start Time: {bidStartTime}</p>
        <p>Bid End Time: {bidEndTime}</p>
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