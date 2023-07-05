
import React, { useState } from "react";
import './style.css';
import tool_img from '../../img/tool.png';

const CardsRecommendation = ({recommendations}) => {
  return (
    <div className="cardsRecommended">
      {
        recommendations.map((value, index) => (
          <div key={index}  className={`${index === 1 || (index === 0 && recommendations.length === 1) ? "recommended" : "card"}`}>
            {index === 1 || (index === 0 && recommendations.length === 1) ? 
            <div className="recommendedHeader">
              <h3>Recommended</h3>
            </div> : null}
            <div className="imageBox">
              <img width={50} height={50} src={tool_img} alt="tool_img" />
            </div>
            <h3>{value.name}</h3>
            <h4>{value.type}</h4>
            <h3>${value.price}</h3>
            <button className="buyButton">
              Buy now
            </button>
            <div className="underline">
              Details
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default CardsRecommendation;
