import React from "react";
import "./NewsLetter.scss";
import logo1 from "../Media/logo1.png";
import logo2 from "../Media/logo2.png";
import logo3 from "../Media/logo3.png";
import logo4 from "../Media/logo4.png";

export const NewsLetter = () => {
  return (
    <div className="news">
      <h1>OUR NEWSLETTER</h1>
      <p>Promotion new products and sales directly to you</p>
      <div className="sub">
        <input placeholder="v.trono@gmail.com" />
        <button className="boton">SUBSCRIBE</button>
      </div>
      <div className="images">
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
      </div>
    </div>
  );
};
export default NewsLetter;
