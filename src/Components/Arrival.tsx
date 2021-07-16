import React from "react";
import "./Arrival.scss";
import new1 from "../Media/new1.png";
import new2 from "../Media/new2.png";
import new3 from "../Media/new3.png";
import new4 from "../Media/new4.png";
import new5 from "../Media/new5.png";
import new6 from "../Media/new6.png";

const arrivals = [
  {
    Name: "HEADPHONE ONE BLACK",
    price: "$29",
    image: new1,
  },
  {
    Name: "SPEAKER BEATS PILL",
    price: "$7.98",
    image: new2,
  },
  {
    Name: "APPLE AIRPODS ",
    price: "$14",
    image: new3,
  },
];

const Arrivals2 = [
  {
    Name: "SMARTWATCH F9 NEGRO",
    price: "$25",
    image: new4,
  },
  {
    Name: "SMARTWATCH F9 NEGRO",
    price: "$25",
    image: new5,
  },
  {
    Name: "SMARTWATCH F9 NEGRO",
    price: "$25",
    image: new6,
  },
];

export const Arrival = () => {
  return (
    <div className="arrival-section">
      <div className="arrive-head">
        <h1>New Arrivals</h1>
        <button className="btns1">View All</button>
      </div>
      <div className="arrival-main">
        {arrivals.map((arrival) => (
          <div className="cards">
            <div className="card-item">
              <h1>NEW</h1>
              <img src={arrival.image} />
              <h2>{arrival.Name}</h2>
              <p>{arrival.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrival-main">
        {Arrivals2.map((arrival) => (
          <div className="cards">
            <div className="card-item">
              <h1>NEW</h1>
              <img src={arrival.image} />
              <h2>{arrival.Name}</h2>
              <p>{arrival.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Arrival;
