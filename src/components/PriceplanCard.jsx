// src/components/PricePlanCard.jsx
import React from 'react';

const PricePlanCard = ({ planName, price, features }) => {
  return (
    <div className="price-plan-card">
      <h3>{planName}</h3>
      <p>Price: {price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricePlanCard;
