import React from "react";
import "./Featured.scss";
import feature1 from "../Media/feature1.png";
import feature2 from "../Media/feature2.png";
import feature3 from "../Media/feature3.png";
import feature4 from "../Media/feature4.png";

const features = [
  {
    Name: "HEADPHONE ONE BLACK",
    price: "$29",
    image: feature1,
  },
  {
    Name: "SPEAKER BEATS PILL",
    price: "$7.98",
    image: feature2,
  },
  {
    Name: "APPLE AIRPODS ",
    price: "$14",
    image: feature3,
  },
  {
    Name: "SMARTWATCH F9 NEGRO",
    price: "$25",
    image: feature4,
  },
];

export const Featured = () => {
  return (
    <div className="featured-section">
      <div className="semi-head">
        <h1>Featured Products</h1>
        <button className="btns">View All</button>
      </div>
      <div className="parent">
        {features.map((feature) => (
          <div className="card">
            <h1>NEW</h1>
            <div className="card-item">
              <img src={feature.image} />
              <h2>{feature.Name}</h2>
              <p>{feature.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Featured;
